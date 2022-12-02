import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer, ENGLISH_STOP_WORDS
from sklearn.metrics.pairwise import linear_kernel
import json

class Bartender():
    def __init__(self, file_path="dataset/cocktail_all.csv"):
        self.df = pd.read_csv(file_path)
        self.vectorizer = None
        self.tfidf_matrix = None
        self.feature_df = None
        self.similarity_df = None

        self.name_vectorizer = None
        self.name_tfidf_matrix = None
        self.name_df = None
        self.name_similarity_df = None

        self.image_url = None

    def load_analizer(self):
        self.df.fillna('', inplace=True)
        stop_words = frozenset(['oz', 'simple', 'dash', 'bsp', 'drops', "ml", "grams", "gram"])
        self.vectorizer = TfidfVectorizer(stop_words=ENGLISH_STOP_WORDS.union(stop_words), token_pattern=r'\b[^\d\W][^\d\W]+\b')
        self.tfidf_matrix = self.vectorizer.fit_transform(self.df['Ingredients'])
        self.feature_df = pd.DataFrame(self.tfidf_matrix.toarray(), columns=self.vectorizer.get_feature_names(), index=self.df['Cocktail Name'])
        similarity_matrix = linear_kernel(self.tfidf_matrix, self.tfidf_matrix)
        self.similarity_df = pd.DataFrame(similarity_matrix, columns=self.feature_df.index, index=self.feature_df.index)

        self.name_vectorizer = TfidfVectorizer(stop_words=ENGLISH_STOP_WORDS)
        self.name_tfidf_matrix = self.name_vectorizer.fit_transform(self.df['Cocktail Name'])
        self.name_df = pd.DataFrame(self.name_tfidf_matrix.toarray(), columns=self.name_vectorizer.get_feature_names(), index=self.df['Cocktail Name'])
        name_similarity_matrix = linear_kernel(self.name_tfidf_matrix, self.name_tfidf_matrix)
        self.name_similarity_df = pd.DataFrame(name_similarity_matrix, columns=self.name_df.index, index=self.name_df.index)

        self.image_url = pd.read_csv("./dataset/image_url.csv")

    def convert_df_2_json(self, df, names):
        idx = []
        for i, name in enumerate(list(df["Cocktail Name"])):
            idx.append(np.argwhere(np.array(names) == name)[0][0])
        idx = np.array(idx)
        out = {"name":[], "all_ingredients": [], "preparation": [], "image": []}
        out["name"] = list(np.array(list(df["Cocktail Name"]))[idx])
        out["all_ingredients"] = list(np.array(list(df["All Ingredients"]))[idx])
        out["preparation"] = list(np.array(list(df["Preparation"]))[idx])
        out["image"] = list(np.array(self.get_image_url_list(out["name"]))[idx])
        return json.dumps(out)
            

    def get_similarity_matrix_by_ingredients(self, user_input):
        user_input_vector = self.vectorizer.transform([user_input])
        similarity_vector = linear_kernel(self.tfidf_matrix, user_input_vector)
        return pd.DataFrame(similarity_vector, columns=['Similarity'], index=self.df['Cocktail Name']).sort_values(by='Similarity', ascending=False)

    def get_recommendation_list_by_ingredient(self, user_input, k=10):
        similar_items = self.get_similarity_matrix_by_ingredients(user_input)
        return self.convert_df_2_json(self.df[self.df['Cocktail Name'].isin(similar_items[:k].index)], list(similar_items[:k].index))

    def get_similarity_matrix_by_name(self, user_input, k=5):
        user_input_vector = self.name_vectorizer.transform([user_input])
        similarity_vector = linear_kernel(self.name_tfidf_matrix, user_input_vector)
        return pd.DataFrame(similarity_vector, columns=['Similarity'], index=self.df['Cocktail Name']).sort_values(by='Similarity', ascending=False)

    def get_recommendation_list_by_name(self, user_input, k=5):
        similar_items = self.get_similarity_matrix_by_name(user_input)
        return self.convert_df_2_json(self.df[self.df['Cocktail Name'].isin(similar_items[:k].index)], list(similar_items[:k].index))

    def get_recommendation_list(self, user_input, k=10):
        similar_items_by_ingredient = self.get_similarity_matrix_by_ingredients(user_input)
        similar_items_by_name = self.get_similarity_matrix_by_name(user_input)

        similar_items = pd.concat([similar_items_by_ingredient, similar_items_by_name], axis=0)
        similar_items_sorted = similar_items.sort_values(by='Similarity', ascending=False)[:k]
        return self.convert_df_2_json(self.df[self.df['Cocktail Name'].isin(similar_items_sorted[:k].index)], list(similar_items_sorted[:k].index))

    def get_image_url_list(self, names, placeHolder_addrss="http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"):
        url_list = []
        for name in names:
            if name in np.array(self.image_url["Name"]):
                url_list.append(np.array(self.image_url.loc[self.image_url["Name"] == name, "url"])[0])
            else:
                rand_idx = int(np.random.rand()*len(self.image_url["Name"]))
                rand_name = self.image_url["Name"][rand_idx]
                placeHolder_addrss = np.array(self.image_url.loc[self.image_url["Name"] == rand_name, "url"])[0]
                url_list.append(placeHolder_addrss)
        return url_list


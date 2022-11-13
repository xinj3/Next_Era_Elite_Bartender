import scrapy


class BarSpider(scrapy.Spider):
    name = 'bar'
    allowed_domains = ['tipsybartender.com']
    start_urls = ['http://tipsybartender.com/']

    def parse(self, response):
        
        h1_tag = response.xpath('//h1/a/text()').extract_first()
        tags = response.xpath('//*[@class = "tag-item"]/a/text()').extract()

        yield{'h1':h1_tag, 'tag':tags}

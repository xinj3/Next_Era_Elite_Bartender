import { useContext } from 'react';
import { FormItemInputContext } from '../context';
import warning from '../../_util/warning';
var useFormItemStatus = function useFormItemStatus() {
  var _useContext = useContext(FormItemInputContext),
    status = _useContext.status;
  process.env.NODE_ENV !== "production" ? warning(status !== undefined, 'Form.Item', "Form.Item.useStatus should be used under Form.Item component. For more information: " + window.location.protocol + "//" + window.location.host + "/components/form-cn/#Form.Item.useStatus") : void 0;
  return {
    status: status
  };
};
// Only used for compatible package. Not promise this will work on future version.
useFormItemStatus.Context = FormItemInputContext;
export default useFormItemStatus;
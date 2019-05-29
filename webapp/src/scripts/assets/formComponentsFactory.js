import StepPanel from '../components/StepPanel/StepPanel.component';
import StepPanelPage from '../components/StepPanelPage/StepPanelPage.component';
import Input from '../components/Input/Input.component';
import Enumerable from '../components/Enumerable/Enumerable.component';
import CheckButton from '../components/CheckButton/CheckButton.component';
import CheckList from '../components/CheckList/CheckList.component';
import Button from '../components/Button/Button.component';
import BigText from '../components/BigText/BigText.component';
import TextField from '../components/TextField/TextField.component';

const generate = {
  stepPanel: () => new StepPanel(),

  stepPanelPage: (idPage, pageProps) => new StepPanelPage(idPage, pageProps),

  enumerable: props => new Input(new Enumerable(props || {}), props || {}),

  checkList: props => new Input(new CheckList(), props || {}),

  populatedEnumerate: (props, blankOption = false) => {
    const enumerable = new Enumerable(props || {});
    if (props.values) {
      if (blankOption) {
        enumerable.addOption('', '');
      }
      Object.entries(props.values).forEach(([key, value]) => {
        enumerable.addOption(key, value);
      });
    }
    return new Input(enumerable, props || {});
  },

  populatedCheckList: (props) => {
    const checklist = new CheckList();
    if (props.values) {
      Object.entries(props.values).forEach(([label, value]) => {
        const checkButton = new CheckButton({ value, label });
        checklist.addListItem(checkButton);
      });
    }
    return new Input(checklist, props || {});
  },

  bigText: props => new Input(new BigText(props || {}), props || {}),

  textField: props => new Input(new TextField(props || {}), props || {}),

  button: label => new Button(label),

};


export default {
  generate,
};

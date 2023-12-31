import img1 from '../../img/img-1.jpg'
import img2 from '../../img/img-2.jpg'
import img3 from '../../img/img-3.jpg'
import img4 from '../../img/img-4.jpg'
import img5 from '../../img/img-5.jpg'
const actions = {
    init: "INIT",
  };
  
  const initialState = {
    provider: null,
    contract: null,
    address: null,
    testList:[
      {
          id: '0',
          picUrl: img1,
          title: '项目1',
          describe: '科技的快速发展正在改变我们的生活方式。从智能家居到无人驾驶汽车，技术正不断塑造我们的未来。随着人工智能和区块链等新技术的崛起，我们正站在科技革命的风口，创造更智能、更便捷的世界。',
          price: '1',
      },
      {
          id: '1',
          picUrl: img2,
          title: '项目2',
          describe: '环保已成为全球的焦点议题。随着气候变化日益严峻，可持续发展已成为当务之急。人们越来越重视绿色能源、再循环和减少碳排放，努力确保地球的未来能够更加美好。',
          price: '1',
      },
      {
          id: '2',
          picUrl: img3,
          title: '项目3',
          describe: '在数字化时代，网络安全至关重要。随着网络攻击的不断增多，保护个人信息和敏感数据变得尤为关键。信息安全专家正努力开发创新性解决方案，以应对不断演化的网络威胁。',
          price: '1',
      },
      {
          id: '3',
          picUrl: img4,
          title: '项目4',
          describe: '教育是塑造未来的关键。现代教育在培养学生的创造力、解决问题的能力和全球意识方面起着重要作用。教育的未来将借助技术工具，为学生提供更具吸引力和个性化的学习体验。',
          price: '1',
      },
      {
          id: '4',
          picUrl: img5,
          title: '项目5',
          describe: '当今，全球各地的文化多样性令人惊叹。从不同的语言、风俗习惯到独特的美食，每个地方都有其独特之处。文化交流变得更加容易，使我们能够更好地了解和尊重其他文化，促进世界和平与合作。',
          price: '3',
      },

  ],
  };
  
  const reducer = (state, action) => {
    const { type, data } = action;
    switch (type) {
      case actions.init:
        return { ...state, ...data };
      default:
        throw new Error("Undefined reducer action type");
    }
  };
  
  export {
    actions,
    initialState,
    reducer
  };
  
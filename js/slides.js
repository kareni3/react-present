//file:///C:/Users/%D0%94%D0%B6%D0%BE%D0%BD%D0%B8/Desktop/react/present/assets/canvas/%D0%BD%D0%B0%D0%B1%D0%BE%D1%80%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%B0.html

const slide = {
    view: 'full', // full, canvas, title, flash, video, content
    title: '',
    canvas: {},
    content: [
      {
        img: {
          src: '',
          width: '',
          height: '',
          full: false,
        },
        p: '',
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 0,
    clicker: true,
    keyer: true,
  }
  
  let aaa = {
    view: 'canvas', 
    title: '',
    canvas: {
      src: './../../assets/canvas/набортекста.html'
    },
    content: [
      {
        img: {
          src: './../../assets/img/2.png',
          width: 'full',
          height: 'full',
          full: true,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 10,
    clicker: true,
    keyer: true,
  };


const slides = [
    {
        view: 'title', 
        title: 'Разработка документа "Счет-фактура" в СЭД Docsvision',
        canvas: {},
        content: [
          {
            img: {
              src: '',
              width: '',
              height: '',
              full: false,
              center: false,
            },
            p: 'Выполнил: Рипачев Женек'
          }
        ],
        flash: {},
        video: {},
        logo: true,
        clickCount: 1,
        clicker: true,
        keyer: true,
    },
    {
      view: 'video', 
      title: '',
      canvas: {},
      content: [
        {
          img: {
            src: '',
            width: '',
            height: '',
            full: false,
          },
          p: ''
        }
      ],
      flash: {},
      video: {
        src: './../../assets/video/privet.mp4',
        auto: false
      },
      logo: true,
      clickCount: 2,
      clicker: true,
      keyer: true,
    },
    {
      view: 'content', 
      title: 'Заголовок 1',
      canvas: {},
      content: [
        {
          img: {
            src: '',
            width: '',
            height: '',
            full: false,
          },
          p: 'Счет-фактура — документ, удостоверяющий фактическую отгрузку товаров или оказание услуг и их стоимость.          ',
        },
        {
          img: {
            src: './../../assets/img/schet-faktura.jpg',
            width: '',
            height: '',
            full: false,
            center: false,
          },
          p: ''
        }
      ],
      flash: {},
      video: {},
      logo: true,
      clickCount: 1,
      clicker: true,
      keyer: true,
  },
  {
    view: 'canvas', 
    title: '',
    canvas: {
      src: './../../assets/canvas/go.html'
    },
    content: [
      {
        img: {
          src: './../../assets/img/2.png',
          width: 'full',
          height: 'full',
          full: true,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 2,
    clicker: false,
    keyer: true,
  },
  {
    view: 'full', 
    title: '',
    canvas: {},
    content: [
      {
        img: {
          src: './../../assets/img/full.png',
          width: 'full',
          height: 'false',
          full: false,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 1,
    clicker: true,
    keyer: true,
  },
  {
    view: 'full', 
    title: '',
    canvas: {},
    content: [
      {
        img: {
          src: './../../assets/img/razm.png',
          width: '',
          height: 'full',
          full: false,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 1,
    clicker: true,
    keyer: true,
  },
  {
    view: 'full', 
    title: '',
    canvas: {},
    content: [
      {
        img: {
          src: './../../assets/img/sost.png',
          width: '',
          height: 'full',
          full: false,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 1,
    clicker: true,
    keyer: true,
  },
  {
    view: 'content', 
    title: 'Состояние',
    canvas: {},
    content: [
      {
        img: {
          src: '',
          width: '',
          height: '',
          full: false,
        },
        p: '',
      },
      {
        img: {
          src: './../../assets/img/sostinfile.png',
          width: '',
          height: '',
          full: false,
          center: false,
        },
        p: ''
      }
    ],
    flash: {},
    video: {},
    logo: true,
    clickCount: 1,
    clicker: true,
    keyer: true,
},
{
  view: 'content', 
  title: 'Состояние',
  canvas: {},
  content: [
    {
      img: {
        src: '',
        width: '',
        height: '',
        full: false,
      },
      p: '',
    },
    {
      img: {
        src: './../../assets/img/roli.png',
        width: '',
        height: '',
        full: false,
        center: false,
      },
      p: ''
    }
  ],
  flash: {},
  video: {},
  logo: true,
  clickCount: 1,
  clicker: true,
  keyer: true,
},
{
  view: 'full', 
  title: '',
  canvas: {},
  content: [
    {
      img: {
        src: './../../assets/img/dokument.png',
        width: '',
        height: 'full',
        full: false,
      },
      p: ''
    }
  ],
  flash: {},
  video: {},
  logo: true,
  clickCount: 1,
  clicker: true,
  keyer: true,
},
{
  view: 'video', 
  title: '',
  canvas: {},
  content: [
    {
      img: {
        src: '',
        width: '',
        height: '',
        full: false,
      },
      p: ''
    }
  ],
  flash: {},
  video: {
    src: './../../assets/video/открывай.mp4',
    auto: false
  },
  logo: true,
  clickCount: 2,
  clicker: true,
  keyer: true,
},/* 
{
  view: 'canvas', 
  title: '',
  canvas: {
    src: './../../assets/canvas/набортекста.html'
  },
  content: [
    {
      img: {
        src: './../../assets/img/2.png',
        width: 'full',
        height: 'full',
        full: true,
      },
      p: ''
    }
  ],
  flash: {},
  video: {},
  logo: true,
  clickCount: 2,
  clicker: false,
  keyer: true,
}, */
{
  view: 'canvas', 
  title: '',
  canvas: {
    src: './../../assets/canvas/сложилось.html'
  },
  content: [
    {
      img: {
        src: './../../assets/img/2.png',
        width: 'full',
        height: 'full',
        full: true,
      },
      p: ''
    }
  ],
  flash: {},
  video: {},
  logo: true,
  clickCount: 2,
  clicker: false,
  keyer: true,
},
  
]

export default slides;
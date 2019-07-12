import React from 'react';

import alta from './images/alta-gracia.png';
import altaBlob from './images/alta-blob.svg';
import atlas from './images/atlas-standard.png';
import atlasBlob from './images/atlas-blob.svg';
import burnout from './images/burnout.png';
import burnoutBlob from './images/burnout-blob.svg';
import business from './images/business-insider.png';
import businessBlob from './images/business-blob.svg';
import cutler from './images/cutler-nutrition.png';
import cutlerBlob from './images/cutler-blob.svg';
import kuju from './images/kuju-coffee.png';
import kujuBlob from './images/kuju-blob.svg';
import sparitual from './images/sparitual.png';
import sparitualBlob from './images/sparitual-blob.svg';
import voke from './images/voke.png';
import vokeBlob from './images/voke-blob.svg';

export const work = [
  {
    image: <img src={ business } alt="Business Insider" />,
    blob: <img src={ businessBlob } alt="Business Insider" />,
    color: '#192940',
    url: 'https://store.businessinsider.com/',
    title: 'Business Insider',
    detail: 'Store Setup / Design / Development / Digital Downloads Configuration',
    description: 'Worked directly with Business Insider to set up and develop their Business Insider Intelligence briefings Ecommerce store along with product and data transfer from previous platform.'
  },
  {
    image: <img src={ atlas } alt="Atlas Standard" />,
    blob: <img src={ atlasBlob } alt="Atlas Standard" />,
    color: '#001489',
    url: 'https://www.atlasstandard.com/',
    title: 'Atlas Standard',
    detail: 'Store Setup / Theme Customization / Development',
    description: 'Atlas Standard is a high quality clothing brand focusing on protection, comfort, and style. Incorporated a modern and elegant design to showcase the clothing and provide a seamless customer experience on desktop and mobile.'
  },
  {
    image: <img src={ kuju } alt="Kuju Coffee" />,
    blob: <img src={ kujuBlob } alt="Kuju Coffee" />,
    color: '#6BBFDB',
    url: 'https://www.kujucoffee.com/',
    title: 'Kuju Coffee',
    detail: 'Store Setup / Design / Theme Customization / Development / Subscription Models',
    description: 'Delivered Kuju Coffee a site to showcase their lifestyle instant coffee brand with custom homepage and external page layouts focusing on imagery and product usage. Incorporated custom Recharge subscription services and design.'
  },
  {
    image: <img src={ sparitual } alt="Sparitual" />,
    blob: <img src={ sparitualBlob } alt="Sparitual" />,
    color: '#DBCBB6',
    url: 'https://www.sparitual.com/',
    title: 'Sparitual',
    detail: 'Theme Customization / Custom Templates / Development / Wholesale Setup',
    description: 'Styled with muted colors and rich photography, Skin Care brand, Sparitual, showcases their products with subtle animations and unique layouts. Configured a wholesale/professional partners component without the use of a third party app.'
  },
  {
    image: <img src={ alta } alt="Alta Gracia" />,
    blob: <img src={ altaBlob } alt="Alta Gracia" />,
    color: '#E6AE24',
    url: 'https://www.altagraciaapparel.com/',
    title: 'Alta Gracia',
    detail: 'Store Setup / Theme Customization / Development',
    description: 'With a focus on living wages and conditions for workers, Do Good clothing brand, Alta Gracia, incorporated a custom theme to showcase clothing being worn and manufactured. Apps configured include store locator, out of stock notice, custom forms, shipstation, and bulk discount.'
  },
  {
    image: <img src={ burnout } alt="Burnout" />,
    blob: <img src={ burnoutBlob } alt="Burnout" />,
    color: '#B39F8E',
    url: 'https://www.byeburnout.com/',
    title: 'Burnout',
    detail: 'Custom Animations / Theme Customization / Development',
    description: 'Simple interactive custom theme for candle lifestyle brand, Burnout, relied on fun animation and easy checkout flows. Burnout provides an engaging and unique shopping experience.'
  },
  {
    image: <img src={ voke } alt="Voke Tabs" />,
    blob: <img src={ vokeBlob } alt="Voke Tabs" />,
    color: '#78A22F',
    url: 'https://kujucoffee.com/',
    title: 'Voke Tabs',
    detail: 'Custom Buy Box Development / Subscription Models / Shogun Development',
    description: 'Voke Tabs required an elegant and easy to use buy box that showcased their product with desktop and mobile optimization. Included custom product zoom, subscription services, and template layouts.'
  },
  {
    image: <img src={ cutler } alt="Cutler Nutrition" />,
    blob: <img src={ cutlerBlob } alt="Cutler Nutrition" />,
    color: '#54205F',
    url: 'https://kujucoffee.com/',
    title: 'Cutler Nutrition',
    detail: 'Store Setup / Design / Custom Theme Development',
    description: 'Built for world-class body-builder, Jay Cutler, Cutler Nutrition featured strong imagery and typefaces to showcase supplement information with custom product templates utilizing custom product fields.'
  }
];
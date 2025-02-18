'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Utensils, Coffee, Cake, Wine, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
}

interface MenuCategory {
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    title: 'Veg Starters',
    icon: Utensils,
    items: [
      {
        id: 'gobi65',
        name: 'Gobi65',
        description: 'Deep-fried cauliflower dish seasoned with spices, making it a popular vegetarian appetizer.',
        price: '120 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNRhqunYcHgb88rl7c8Kg9WMG3ogg_J9lnIw&s'
      },
      {
        id: 'gobi-manchuria',
        name: 'Gobi Manchuria',
        description: 'Crispy, spicy, and tangy Indo-Chinese dish made with deep-fried cauliflower florets tossed in a flavorful soy-based sauce.',
        price: '80 Rs',
        image: 'https://media.vogue.in/wp-content/uploads/2020/11/Gobhi-Manchurian-recipe-chinese-starters-1920x1080.jpg'
      },
      {
        id: 'baby-corn',
        name: 'Baby Corn Manchuria',
        description: 'Crispy, deep-fried baby corn tossed in a flavorful blend of Indo-Chinese sauces.',
        price: '120 Rs',
        image: 'https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian.jpg'
      },
      {
        id: 'paneer-manchuria',
        name: 'Paneer Manchuria',
        description: 'Indo-Chinese dish made with deep-fried paneer cubes tossed in a spicy, tangy Manchurian sauce.',
        price: '130 Rs',
        image: 'https://www.cookclickndevour.com/wp-content/uploads/2015/06/paneer-manchurian-dry-recipe1.jpg'
      },
      {
        id: 'chilly-aalu',
        name: 'Chilly Aalu',
        description: 'Spicy and flavorful Indo-Chinese dish made with crispy potatoes tossed in a tangy, hot sauce.',
        price: '110 Rs',
        image: 'https://ranveerbrar.com/wp-content/uploads/2022/07/Honey-chilli-potatoes.jpg'
      },
      {
        id: 'veg-roll',
        name: 'Veg Roll',
        description: 'A delicious vegetarian roll filled with fresh veggies, flavorful spices, and wrapped in a soft roti.',
        price: '120 Rs',
        image: 'https://revi.b-cdn.net/wp-content/uploads/2017/01/veg-spring-roll-main-500x500.jpg'
      },
    ]
  },
  {
    title: 'Main Courses',
    icon: Coffee,
    items: [
      {
       id: 'Biriyani',
       name: 'Veg Biryani',
        description: 'Veg Biryani is a fragrant and flavorful rice dish cooked with aromatic spices, mixed vegetables, and herbs.',
        price: '120 Rs',
        image: 'https://static.wixstatic.com/media/91e241_0cf76aa5613b4055be2f922f71edeaa0~mv2.jpg/v1/fill/w_560,h_372,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Ustaadi%20Hyderabadi%20Veg%20Biryani.jpg',
      },
      {
        id: 'Dum Biryani',
        name: 'Veg Dum Biryani',
        description: 'Veg Dum Biryani is a fragrant, flavorful rice dish layered with mixed vegetables, aromatic spices, and slow-cooked to perfection.',
        price: '140 Rs',
        image: 'https://www.jeyashriskitchen.com/wp-content/uploads/2016/01/hyderabadi-dum-biryani.jpg',
      },
      {
        id: 'Panner',
        name: 'Panner Biryani',
        description: 'Paneer Biryani is a flavorful and aromatic rice dish made with marinated paneer, basmati rice, and a blend of rich spices.',
        price: '150 Rs',
        image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Priya__Suresh/Paneer_Biryani_Recipe_1.jpg',
      },
      {
        id: 'kaju',
        name: 'Kaju Biryani',
        description: 'Kaju Biryani is a rich and flavorful rice dish made with fragrant basmati rice, aromatic spices, and crunchy cashew nuts.',
        price: '200 Rs',
        image: 'https://media.istockphoto.com/id/1039691852/photo/vegetable-fried-rice.jpg?s=612x612&w=0&k=20&c=ylOZDjkctSmrZIWP24DQkMf_XKpg2xFPA4KOolk3B_U=',
      },
      {
        id: 'Fried Rice',
        name: 'Veg Fried Rice',
        description: 'Veg fried rice is a flavorful and aromatic dish made with stir-fried rice, fresh vegetables, and savory seasonings.',
        price: '110 Rs',
        image: 'https://media.istockphoto.com/id/1292617507/photo/tasty-veg-schezwan-fried-rice-served-in-bowl-over-a-rustic-wooden-background-indian-cuisine.jpg?s=612x612&w=0&k=20&c=MlfiFWbcPDUj2wnjtxoHBxSUrRrKb9c1OR8rS9H4goc=',
      },
      {
        id: 'Tomato',
        name: 'Tomato Rice',
        description: 'Tomato rice is a flavorful South Indian dish made with rice, tomatoes, and aromatic spices.',
        price: '110 Rs',
        image: 'https://cookingfromheart.com/wp-content/uploads/2016/11/Tomato-Rice-1.jpg',
      },
      {
        id: 'Zeera',
        name: 'Zeera Rice',
        description: 'Zeera rice is a fragrant Indian dish made by cooking basmati rice with cumin seeds and aromatic spices.',
        price: '100 Rs',
        image: 'https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg',
      },
      {
        id:'Sambar',
        name: 'Sambar Rice',
        description: 'Sambar rice is a flavorful South Indian dish made with lentils, rice, vegetables, and a tangy tamarind-based spice mix.',
        price: '120 Rs',
        image: 'https://img.freepik.com/free-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18712.jpg',
      },
      {
        id: 'Lemon',
        name: 'Lemon Rice',
        description: 'Lemon rice is a tangy and flavorful South Indian dish made with cooked rice, lemon juice, and aromatic spices.',
        price: '120 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwES1NzkwFEtWy72U6WzPWZhhDm3Ay97_fkg&s',
      },
      {
        id: 'Curd',
        name: 'Curd Rice',
        description: 'Curd rice is a comforting Indian dish made with rice, yogurt, and seasoning, often enjoyed as a soothing meal or side dish.',
        price: '110 Rs',
        image: 'https://static.toiimg.com/thumb/75732038.cms?imgsize=1313318&width=800&height=800',
      },
      {
        id:'Rumali',
        name: 'Rumali Roti',
        description: 'Rumali roti is a soft, thin Indian flatbread that’s traditionally made by hand and cooked on an inverted griddle.',
        price: '10 Rs (Single roti)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5sLz--3jVBv7tcqNobGtcuX6Exe39SMR6Q&s',
      },
      {
        id:'Butter',
        name: 'Butter Naan ',
        description: 'Butter naan roti is a soft, fluffy Indian flatbread, generously brushed with melted butter, perfect for pairing with curries and gravies.',
        price: '12 Rs (Single roti)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUe3Qmm4KraCJt2RqKU5LvMYiPzWi0a-tWqA&s',
      },
      {
        id: 'Masala',
        name: 'Masala Kulche',
        description: 'Masala kulcha is a flavorful Indian flatbread stuffed with a spiced filling, typically served with curry or chutney.',
        price: '14 Rs (Single roti)',
        image: 'https://food.annapurnaderoyal.com/wp-content/uploads/2021/07/masala-kulcha.jpg',
      },
    ]
  },
  {
    title: 'Curries',
    icon: Coffee,
    items: [
      {
        id:'Capsicum',
        name: 'Capsicum Masala',
        description: 'Capsicum masala curry is a flavorful Indian dish made with bell peppers cooked in a rich, spiced gravy.',
        price: '120 Rs',
        image: 'https://i.ytimg.com/vi/r_WEpzibkRc/maxresdefault.jpg',
      },
      {
        id: 'Aloo',
        name: 'Aloo Kurma',
        description: 'Aloo Kurma is a rich and flavorful Indian curry made with potatoes, coconut, and aromatic spices.',
        price: '125 Rs',
        image: 'https://vismaifood.com/storage/app/uploads/public/2ec/ee4/d14/thumb__700_0_0_0_auto.jpg',
      },
      {
        name: 'Chole Masala',
        description: 'Chole masala is a flavorful North Indian curry made with chickpeas, tomatoes, onions, and aromatic spices.',
        price: '130 Rs',
        image: 'https://www.indianveggiedelight.com/wp-content/uploads/2019/05/chana-masala-recipe-featured.jpg',
        id: 'Chole'
      },
      {
        name: 'Paneer Butter Masala ',
        description: 'Paneer Butter Masala is a rich and creamy North Indian curry made with paneer (cottage cheese) cooked in a spiced tomato-based gravy with butter and cream.',
        price: '220 Rs',
        image: 'https://vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg',
        id: 'Paneer Butter'
      },
      {
        name: 'Paneer Mutter Masala',
        description: 'Paneer Mutter Masala is a rich, flavorful curry made with paneer (Indian cottage cheese) and green peas, cooked in a spiced tomato-based gravy.',
        price: '230 Rs',
        image: 'https://i.ytimg.com/vi/X7OBjBaGAwc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLX_ZTELg92hkLt2Kp0TwKhBis9Q',
        id: 'Paneer Mutter'
      },
      {
        name: 'Palak Paneer',
        description: 'Palak Paneer is a creamy, flavorful curry made with fresh spinach and soft paneer cubes, offering a perfect blend of spices and rich texture.',
        price: '240 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH_DiTDlIMrrunji-AQ9P-qyK445J27gkTtQ&s',
        id: 'Palak'
      },
      {
        name: 'Malai Kofta',
        description: 'Malai Kofta Curry is a rich and creamy North Indian dish made with soft, deep-fried vegetable or paneer balls served in a flavorful tomato-based gravy.',
        price: '260 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsT8TUD-NzEQeESGXCTvbEFMbcMp-heDW-Kw&s',
        id: 'Kofta'
      },
      {
        name: 'Aloo Mutter Masala',
        description: 'Aloo Mutter Curry is a flavorful North Indian dish made with potatoes (aloo) and peas (mutter) simmered in a spicy tomato-based gravy.',
        price: '240 Rs',
        image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Punjabi-Aloo-Matar-Recipe.jpg',
        id: 'Aloo Mutter'
      },
      {
        name: 'Dum Aloo Masala',
        description: 'Dum Aloo is a flavorful, spiced curry made with tender baby potatoes simmered in a rich, aromatic gravy of yogurt, tomatoes, and a blend of spices.',
        price: '230 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQwoKIDApoSobKiDejBdja3FyF29O7Z21-mQ&s',
        id: 'Dum'
      },
      {
        name: 'Rajma',
        description: 'Rajma is a popular North Indian dish made of kidney beans cooked in a flavorful tomato-based gravy, often served with rice.',
        price: '170 Rs',
        image: 'https://media.istockphoto.com/id/1059505988/photo/indian-style-spicy-rajma-curry-kidney-beans-curry.jpg?s=612x612&w=0&k=20&c=lev8SRSKQxEETaiM4VtUJN0EmFFNw7RPOX3jHS92Z24=',
        id: 'Rajma'
      },
      {
        name: 'MilMaker Curry',
        description: 'Milmaker curry is a rich and flavorful dish made with millets, vegetables, and a blend of aromatic spices, perfect for a wholesome meal.',
        price: '190 Rs',
        image: 'https://i.ytimg.com/vi/8sZc9CkVxYU/maxresdefault.jpg',
        id: 'MilMaker'
      },
      {
        name: 'Gobi Mutter Curry',
        description: 'Gobi Mutter Masala is a flavorful North Indian curry made with cauliflower (gobi), peas (mutter), and a rich, spiced tomato-based gravy.',
        price: '200 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwURDGTlzOLwEKLgPoX346nCl1ZEHHXoaS2w&s',
        id: 'Gobi'
      },
      {
        name: 'Brinjal Masala',
        description: 'Brinjal masala curry is a flavorful and aromatic dish made with tender eggplants cooked in a spiced gravy, perfect for pairing with rice or roti.',
        price: '200 Rs',
        image: 'https://foodsandflavorsbyshilpi.com/wp-content/uploads/2021/06/FB-Thumnails-website-old-2021-06-05T110113.010.jpg',
        id: 'Birnjal'
      },
      {
        name: 'PanasaPottu Curry',
        description: 'Panasa Pottu Curry is a flavorful South Indian dish made with raw jackfruit, cooked in a spicy, tangy gravy with traditional spices.',
        price: '220 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIDIHvKcFSMByIqWU8NmLGAOQ0sdeycBOKA&s',
        id: 'PanasaPottu'
      },
      {
        name: 'Ladies Finger Fry',
        description: 'Ladies Finger Fry Curry is a flavorful dish made with crispy fried okra (ladies finger) cooked in a spiced, tangy curry base.',
        price: '120 Rs',
        image: 'https://www.yellowthyme.com/wp-content/uploads/2018/09/Kurkure-Bhindi-6-of-6.jpg',
        id: 'Fry'
      },
      {
        name: 'Aloo Fry',
        description: 'Aloo fry curry is a flavorful Indian dish made with crispy fried potatoes in a spiced, aromatic curry sauce.',
        price: '130 Rs',
        image: 'https://i0.wp.com/kitchenflavours.net/wp-content/uploads/2022/05/Andhra-Style-Potato-Fry.jpg?fit=666%2C999&ssl=1',
        id: 'Aloo'
      },
      {
        name: 'Dal(Mango,Tomato,Palak,Gongura,Dosakaya)',
        description: 'Dal Fry is a popular Indian dish made with yellow lentils cooked with spices, ghee, and herbs, creating a flavorful and hearty curry.',
        price: '120 Rs(Per Item)',
        image: 'https://shwetainthekitchen.com/wp-content/uploads/2021/12/Dal-Fry-Recipe.jpg',
        id: 'Dal'
      },
    ]
  },
  {
    title: 'Pickles',
    icon: Coffee,
    items: [
      {
        name: 'Gongura Pickle',
        description: 'Gongura pickle is a tangy and spicy South Indian condiment made from gongura leaves, known for its unique sour flavor and rich, bold taste.',
        price: '600 Rs(Per KG)',
        image: 'https://palleturipachallu.com/cdn/shop/files/gongura.jpg?v=1734943080',
        id: 'Pickle'
      },
      {
        name: 'Aavakaya Pickle',
        description: 'Aavakaya pickle is a tangy and spicy South Indian condiment made with raw mangoes, mustard, and a blend of aromatic spices.',
        price: '650 Rs(Per KG)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpeuHtjAarf45JKrY_OgUDm5Nh1XtDIT3pdQ&s',
        id: 'Aavakaya'
      },
      {
        name: 'Dosakaya Pickle',
        description: 'Dosakaya pickle is a tangy and flavorful South Indian condiment made from cucumber, spices, and a hint of sourness, perfect for complementing rice or roti.',
        price: '550 Rs(Per KG)',
        image: 'https://anusharaji.wordpress.com/wp-content/uploads/2017/02/dosakaya_pickle.jpg',
        id: 'Dosakaya'
      }
    ]
  },
  {
    title: 'Desserts',
    icon: Cake,
    items: [
      {
        name: 'Gulab Jamun',
        description: 'Gulab Jamun is a delicious Indian dessert made of deep-fried milk-based dough soaked in aromatic sugar syrup.',
        price: '10 RS(Per Piece)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Nb_9txUG0E4-dopc4QMFkaqLKF27qVN3xw&s',
        id: 'Jamun'
      },
      {
        name: 'Dubal Ka Meetha',
        description: 'Double Ka Meetha is a popular Hyderabadi dessert made with bread, milk, dry fruits, and flavored with saffron and cardamom.',
        price: '120 Rs',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXlqEXdqd0oMe6bXVK3XyFb1xJgjgiww7odg&s',
        id: 'Meetha'
      },
      {
        name: 'Kaddu Kheer',
        description: 'Kaddu Kheer is a delicious and creamy Indian dessert made with grated pumpkin, milk, sugar, and aromatic spices.',
        price: '120 Rs',
        image: 'https://charminarhotel.com/wp-content/uploads/2024/07/Untitled-design-44.jpg',
        id: 'Kheer'
      },
      {
        name: 'Rasagulla',
        description: 'Rasgulla is a popular Bengali sweet made from soft, spongy balls of chhena soaked in sugary syrup.',
        price: '200 Rs(Per KG)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy_-cod-LnER4zuW9uKvx9JsPsDkx5zsYJy82UGkTVa385CABmQuxO33rUNmlNXD_xTaQ&usqp=CAU',
        id: 'Rasagulla'
      },
    ]
  },
  {
    title: 'Sweets',
    icon: Cake,
    items: [
      {
        name: 'Laddu',
        description: 'Laddu is a delicious, round Indian sweet made from flour, sugar, and ghee, often flavored with cardamom and nuts.',
        price: '250 RS (Per KG)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDuEdSbk23n3Ke5NI4_thzMpaze4rgCduMw&s',
        id: 'Laddu'
      },
      {
        name: 'Bandar laddu',
        description: 'Bandar Laddu is a popular Indian sweet, known for its round shape and delicious mix of flour, ghee, and sugar, often enjoyed during festive occasions.',
        price: '220 Rs(Per KG)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLPjLEXnZlxLu_A7rz656zk5RJHz2glxaSAg&s',
        id: 'Bandar'
      },
      {
        name: 'Bobbatlu',
        description: 'Bobbatlu, also known as Puran Poli, is a traditional Indian sweet flatbread filled with a mixture of lentils, jaggery, and spices.',
        price: '20 Rs(Per Piece)',
        image: 'https://i.ytimg.com/vi/M-0ORawiotI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDxhqjfGMUy9iE4o2ahgQ0Bf4Bh2g',
        id: 'Bobbatlu'
      },
      {
        name: 'Jalebi',
        description: 'Jalebi is a sweet, crispy, and syrup-soaked Indian dessert loved for its golden, coiled shape and rich flavor.',
        price: '20 Rs(Per Piece)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaw4N58CWjnkAQaqR9q3-adJf3u1G6dopivg&s',
        id: 'Jalebi'
      },
      {
        name: 'Rava Kesari',
        description: 'Rava Kesari is a popular South Indian dessert made from semolina, sugar, ghee, and flavored with cardamom and nuts.',
        price: '150 Rs',
        image: 'https://www.ticklingpalates.com/wp-content/uploads/2022/09/rava-kesari-recipe.jpg',
        id: 'Kesari'
      },
      {
        name: 'Madatha Kaja',
        description: 'Madatha Kaja is a traditional Andhra sweet made from flour, sugar, and ghee, shaped into a spiral and deep-fried to perfection.',
        price: '250 Rs',
        image: 'https://pappaladabba.com/wp-content/uploads/2023/10/1000x1000v01mk.jpg',
        id: 'Kaja'
      },
      {
        name: 'Rasmalai',
        description: 'Rasmalai is a delicious Indian dessert made of soft, spongy cream-soaked milk dumplings, flavored with cardamom and garnished with pistachios or saffron.',
        price: '250 Rs(Per KG)',
        image: 'https://palatesdesire.com/wp-content/uploads/2022/09/Rasmalai-recipe@palates-desire.jpg',
        id: 'Rasamalai'
      },
      {
        name: 'Carrot Halwa',
        description: 'Carrot halwa is a rich and delicious Indian dessert made from grated carrots, milk, sugar, and ghee, cooked to a smooth, aromatic consistency.',
        price: '130 Rs',
        image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/11/gajar-halwa-carrot-halwa.jpg',
        id: 'Halwa'
      },
    ]
  },
  {
    title: 'Chat-Items',
    icon: Wine,
    items: [
      {
        name: 'Pani-Puri',
        description: 'Pani Puri is a popular Indian street food consisting of crispy hollow puris filled with spicy, tangy water, potatoes, and chutneys.',
        price: '20 Rs(Per Plate)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcte0LQmjhbPSQVhSE3wBP6vKxqVWj5pzNOA&s',
        id: 'Pani-Puri'
      },
      {
        name: 'Bhel-Puri',
        description: 'Bhel Puri is a popular Indian street food made with puffed rice, vegetables, tangy tamarind chutney, and spices.',
        price: '25 Rs(Per Plate)',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4XYwfPIF9ou-ILSkVIGc23znfiZpMdYGwg&s',
        id: 'Bhel'
      },
      {
        name: 'Dahi-Puri',
        description: 'Dhai Puri is a popular Indian street food made with crispy puris filled with spiced potatoes, chutneys, yogurt, and sev.',
        price: '30Rs(Per Plate)',
        image: 'https://www.cookwithmanali.com/wp-content/uploads/2022/06/Dahi-Puri.jpg',
        id: 'Dahi'
      },
      {
        name: 'Aloo-Cutlet',
        description: 'Aloo cutlet is a crispy and flavorful Indian snack made with mashed potatoes, spices, and breadcrumbs, deep-fried or shallow-fried to perfection.',
        price: '30Rs(Per Plate)',
        image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2015/02/1-20.jpg',
        id: 'Aloo-Cutlet'
      },
      {
        name: 'Samosa-Cutlet',
        description: 'Samosa cutlet is a crispy, spicy snack made by shaping and frying a mixture of crumbled samosas, spices, and breadcrumbs.',
        price: '30Rs(Per Plate)',
        image: 'https://i.pinimg.com/736x/fb/84/42/fb844259107d86481162f9e2f3760a91.jpg',
        id: 'Samosa-Cutlet'
      },
      {
        name: 'Pav-Bhaji',
        description: 'Pav Bhaji is a popular Indian street food consisting of a spicy mashed vegetable curry served with buttered pav (bread rolls).',
        price: '40Rs(Per Plate)',
        image: 'https://ribbonstopastas.com/wp-content/uploads/2022/03/green-pav-bhaji-003.jpg',
        id: 'Pav-Bhaji'
      },
    ]
  },
  {
    title: 'Beverages',
    icon: Wine,
    items: [
      {
        name: 'Tea',
        description: 'Tea is a comforting drink that brings warmth, relaxation, and a moment of calm to any day.',
        price: '10 Rs',
        image: 'https://images.onlymyhealth.com/imported/images/2024/September/06_Sep_2024/mn.jpg',
        id: 'Tea'
      },
      {
        name: 'Coffee',
        description: 'Coffee is the perfect blend of warmth, energy, and comfort in a cup.',
        price: '25 Rs',
        image: 'https://thumbs.dreamstime.com/b/espresso-coffee-cup-beans-vintage-table-90374872.jpg',
        id: 'Coffee'
      },
      {
        name: 'Cool Drinks',
        description: 'Cool drinks are refreshing beverages that provide a crisp and revitalizing experience, perfect for quenching your thirst.',
        price: 'From 30Rs',
        image: 'https://thumbs.dreamstime.com/b/bottles-assorted-global-soft-drinks-poznan-poland-mar-drink-market-dominated-brands-few-multinational-companies-founded-88853223.jpg',
        id: 'Cool Drinks'
      }
    ]
  }
];

export default function MenuPage() {
  const router = useRouter();
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (itemId: string, increment: boolean) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + (increment ? 1 : -1))
    }));
  };

  const proceedToOrder = () => {
    router.push('/order');
  };

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our carefully curated menu featuring fresh, seasonal ingredients and innovative culinary creations.
        </p>
      </div>

      <div className="space-y-20">
        {menuCategories.map((category, index) => (
          <section key={index}>
            <div className="flex items-center gap-2 mb-8">
              <category.icon className="h-8 w-8" />
              <h2 className="text-3xl font-semibold">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  {item.image && (
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <CardHeader className="flex flex-row items-center justify-between">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg font-semibold text-primary">
                      {item.price}
                    </span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, false)}
                          disabled={!quantities[item.id]}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-lg font-medium w-8 text-center">
                          {quantities[item.id] || 0}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, true)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {Object.values(quantities).some(q => q > 0) && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
          <div className="container flex justify-between items-center">
            <span className="text-lg font-semibold">
              {Object.values(quantities).reduce((a, b) => a + b, 0)} items selected
            </span>
            <Button onClick={proceedToOrder}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Proceed to Order
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
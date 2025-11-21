import React from 'react';
import TextPressure from '../components/TextPressure/TextPressure.jsx';
import InfiniteMenu from '../components/InfiniteMenu/InfiniteMenu.jsx';
import SplitText from '../components/SplitText/SplitText.jsx';
function Skills() {
  const items = [
    {
      image: 'https://miro.medium.com/v2/resize:fit:600/1*W02WEmR0_JeJXfLWN2zHwQ.png',
      link: 'https://google.com/',
      title: 'AWS',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.XdcrYecW6uCLwJOOe5048QHaED?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'react',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://2.bp.blogspot.com/-u7D-CIDmuzE/XHSaUZ74evI/AAAAAAAASEw/tDY0LYG-Ra4rMlSUi9BLioDgT5WT5MUOwCLcBGAs/s1600/CSS%2B3.png',
      link: 'https://google.com/',
      title: 'CSS',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse3.mm.bing.net/th/id/OIP.7Xz7WOGCUiipupGxPMHBlgHaE7?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'DevOps',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse3.mm.bing.net/th/id/OIP.DEt_TbohHcb6KhpldP6vMwHaEK?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'JS',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse4.mm.bing.net/th/id/OIP.-aKfKSHweX38XMClOwwjigHaHa?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Grafana',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.TFPZ8bcUJ8k6H5Wtnw6v8AHaHa?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Kubernetes',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse2.mm.bing.net/th/id/OIP.Gm4KnU_sEl1nyGqkgvatSQHaEK?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Docker',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse4.mm.bing.net/th/id/OIP.Rsc8CvZtWKmuiOwNHlEaCAHaD4?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Node.js',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse3.mm.bing.net/th/id/OIP.JW4XjltuDPPRm7zAbs69bQAAAA?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Frontend',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse1.mm.bing.net/th/id/OIP.bv_Tocb87-0VJg0op4xqRwHaDx?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'DataBase',
      description: 'This is pretty cool, right?'
    },
    {
      image: 'https://tse1.mm.bing.net/th/id/OIP.SuJaETNFlniYDbhUOZ1_LAHaD4?pid=Api&P=0&h=220',
      link: 'https://google.com/',
      title: 'Backend',
      description: 'This is pretty cool, right?'
    }
  ];

  return (
    <div className='bg-black flex flex-col justify-center text-center text-white min-h-screen p-10'>
      <TextPressure text="My Skill sets" className="text-6xl text-center mb-10" />
      <div>
        <SplitText text="Please Hold And Rotate The Globe Below 👇"
        className="pt-10 my-auto py-20 text-gray-500 text-center text-xl "
        delay={100}
        />
      </div>
      {/* 👈 PASS THE ITEMS ARRAY AS THE 'items' PROP */}
      <InfiniteMenu items={items} /> 
    </div>
  );
}

export default Skills;
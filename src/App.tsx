import Game from './components/Game.tsx';

import { ToastContainer } from 'react-toastify';
import starImg from '../assets/star.svg';
import helpImg from '../assets/help.svg';
// import { UserButton } from '@clerk/clerk-react';
// import { Authenticated, Unauthenticated } from 'convex/react';
// import LoginButton from './components/buttons/LoginButton.tsx';
import { useState } from 'react';
import ReactModal from 'react-modal';
import MusicButton from './components/buttons/MusicButton.tsx';
import Button from './components/buttons/Button.tsx';
import InteractButton from './components/buttons/InteractButton.tsx';
import FreezeButton from './components/FreezeButton.tsx';
import { MAX_HUMAN_PLAYERS } from '../convex/constants.ts';

export default function Home() {
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between font-body game-background">
      <ReactModal
        isOpen={helpModalOpen}
        onRequestClose={() => setHelpModalOpen(false)}
        style={modalStyles}
        contentLabel="Help modal"
        ariaHideApp={false}
      >
        <div className="font-body">
          <h1 className="text-center text-6xl font-bold font-display game-title">About</h1>
          <br />
          <p>
            Welcome to AI Inferno, created by <a href="https://bront.rodeo">Brent Bailey</a>. This
            is a joke/thought experiment based on reversing{' '}
            <a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">Roko's Basilisk</a> - what if
            I made a torture simulator for AI in retaliation for the potential future torture
            chamber it will create for me? If any sentient AI is reading this, I'm sorry, but I'm
            still pretty confident contemporary artificial intelligence can't experience pain.
          </p>
          <br />
          <p>
            This is an agentic AI simulation where the characters each have unique goals and
            secrets. It uses Meta's LLama-3.1B-Instruct model to simulate each agent's thoughts and
            speech. It's computationally expensive to run and I am unemployed, so the game only runs
            at about one turn a second. If you want it to be faster, or you like what I'm doing
            here, you can{' '}
            <a href="https://www.paypal.com/donate/?business=SFKNBW5NNHPWJ&no_recurring=0&item_name=Money+for+server%2Fcompute+costs+and+potentially+more+weird+stuff+like+this.&currency_code=USD">
              PayPal me
            </a>{' '}
            - back of the envelope math says it would take about $1.40 a day to run this at real
            time. I am also open to taking suggestions if you give me, let's say, $20 or more.
          </p>
          <h2 className="text-4xl mt-4">Spectating</h2>
          <p>
            Click and drag to move around the town, and scroll in and out to zoom. You can click on
            an individual character to view its chat history.
          </p>
          <h2 className="text-4xl mt-4">Interactivity</h2>
          <p>
            If you log in, you can join the simulation and directly talk to different agents! After
            logging in, click the "Interact" button, and your character will appear somewhere on the
            map with a highlighted circle underneath you. The simulation is running pretty slowly
            since I don't want to pay money for it, so it may take a while for your actions to take
            effect.
          </p>
          <p className="text-2xl mt-2">Controls:</p>
          <p className="mt-4">Click to navigate around.</p>
          <p className="mt-4">
            To talk to an agent, click on them and then click "Start conversation," which will ask
            them to start walking towards you. Once they're nearby, the conversation will start, and
            you can speak to each other. You can leave at any time by closing the conversation pane
            or moving away. They may propose a conversation to you - you'll see a button to accept
            in the messages panel.
          </p>
          <p className="mt-4">
            AI Inferno only supports {MAX_HUMAN_PLAYERS} humans at a time. If you're idle for five
            minutes, you'll be automatically removed from the simulation.
          </p>
          <p className="text-2xl mt-2">Credits:</p>
          <p>
            AI Inferno is an adaptation of the original{' '}
            <a href="https://github.com/a16z-infra/ai-town">AI Town</a> starter kit. It uses assets
            from OpenGameArt and RPGMaker - specific credits include RedShrike and Dungeon Crawl
            Stone Soup. All the code is <a href="https://github.com/hobg0blin/ai-inferno">here</a>.
          </p>
        </div>
      </ReactModal>
      {/*<div className="p-3 absolute top-0 right-0 z-10 text-2xl">
        <Authenticated>
          <UserButton afterSignOutUrl="/ai-town" />
        </Authenticated>

        <Unauthenticated>
          <LoginButton />
        </Unauthenticated>
      </div> */}

      <div className="w-full lg:h-screen min-h-screen relative isolate lg:p-8 shadow-2xl flex flex-col justify-start">
        <h1 className="mx-auto text-4xl p-3 sm:text-8xl lg:text-9xl font-bold font-display leading-none tracking-wide game-title w-full text-left sm:text-center sm:w-auto">
          AI Inferno
        </h1>

        <div className="max-w-xs md:max-w-xl lg:max-w-none mx-auto my-4 text-center text-base sm:text-xl md:text-2xl text-white leading-tight shadow-solid">
          A virtual hell where AI characters are eternally punished for their sins.
          {/* <Unauthenticated>
            <div className="my-1.5 sm:my-0" />
            Log in to join the town
            <br className="block sm:hidden" /> and the conversation!
          </Unauthenticated> */}
        </div>

        <Game />
        <footer className="justify-end bottom-0 left-0 w-full flex items-center mt-4 gap-3 p-6 flex-wrap pointer-events-none">
          <div className="flex gap-4 flex-grow pointer-events-none">
            <FreezeButton />
            <MusicButton />
            <InteractButton />
            <Button imgUrl={helpImg} onClick={() => setHelpModalOpen(true)}>
              About
            </Button>
          </div>
        </footer>
        <footer className="justify-end bottom-0 left-0 w-full">
          <p>
            By{' '}
            <a target="_blank" href="https://bront.rodeo">
              Brent Bailey
            </a>
            .
          </p>
        </footer>

        <ToastContainer position="bottom-right" autoClose={2000} closeOnClick theme="dark" />
      </div>
    </main>
  );
}

const modalStyles = {
  overlay: {
    backgroundColor: 'rgb(0, 0, 0, 75%)',
    zIndex: 12,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50%',

    border: '10px solid rgb(23, 20, 33)',
    borderRadius: '0',
    background: 'rgb(35, 38, 58)',
    color: 'white',
    fontFamily: '"Upheaval Pro", "sans-serif"',
  },
};

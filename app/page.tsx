//COMPONENETS
import Image from 'next/image';
import * as Icons from '@/icons';
import * as Componenets from '@/components/index';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as motion from 'framer-motion/client';

//UTILS
import React from 'react';
import { Inconsolata } from 'next/font/google';
const inconsolata = Inconsolata({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <main>
        <Componenets.BackToTop />
        {/* INTRO */}
        <section className="relative w-screen h-screen -mx-6 -mt-8 pt-12 flex items-center justify-center">
          <div className="absolute z-20 text-center text-white space-y-8 flex flex-col px-6 items-center">
            <div className="bg-foreground w-24 h-24 rounded-full relative border-2 border-primary">
              <div className="absolute z-10 w-24 h-24 rounded-full border-4 border-background "></div>
              <Icons.CodeXml size={25} className="text-primary absolute z-10 bottom-0 right-0" />
              <Image
                src={'/profile.jpg'}
                alt="Imagem com elementos arredondados nos cantos em cores claras."
                objectFit="cover"
                fill
                className="z-0 absolute rounded-full"
              />
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <p className={`text-sm ${inconsolata.className}`}>
                  Olá, meu nome é <span className="text-primary">Calvin Teixeira</span> e sou
                </p>
                <h2 className="font-bold text-4xl">Desenvolvedor Front End</h2>
              </div>
              <p className="text-sm text-secondary-foreground">
                Transformo necessidades em aplicações práticas e evolutivas, usando minha paixão pela tecnologia para desenvolver sistemas que oferecem soluções
                inovadoras e eficazes, melhorando a vida das pessoas que as utilizam.
              </p>
            </div>
            <div className="flex gap-4 flex-wrap justify-center">
              <Componenets.Tech techName="React" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/hncxuwrbq7nrzp7qklkx.svg" />
              <Componenets.Tech techName="Typescript" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679757/vlc8riyjffv551sdls1r.svg" />
              <Componenets.Tech techName="Next JS" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/xye80ihhspwbghxrocll.svg" />
              <Componenets.Tech techName="Node JS" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679753/s83iwv55v6mbyylwb9zl.svg" />
              <Componenets.Tech techName="GitHub" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/ipfxobd46eboijekysh5.svg" />
              <Componenets.Tech techName="GitLab" iconPath="https://res.cloudinary.com/dotdj32as/image/upload/v1724679755/j305tlqj2vemq3l5ywpo.svg" />
            </div>
          </div>
          <Image
            src={'/Background_Intro.png'}
            alt="Imagem com elementos arredondados nos cantos em cores claras."
            objectFit="cover"
            fill
            className="z-0 w-full"
          />
        </section>
        {/* EXPERIÊNCIAS */}
        <section className="w-full">
          <div className="space-y-2 text-center">
            <p className={`text-primary text-lg ${inconsolata.className}`}>Minhas experiências</p>
            <h2 className={`font-semibold text-xl text-foreground ${inconsolata.className}`}>Cenários onde já atuei</h2>
          </div>
          <div className="mt-10 space-y-4">
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.CodeXml />}
                title="Web"
                description="Desenvolvimento de serviços dentro de um portal, mantendo regras de negócio complexas. Além disse também atuei integrando outros devs nos projetos e auxiliando nas melhores práticas de desenvolvimento."
              />
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.TabletSmartphone />}
                title="Mobile"
                description="Atuei liderando e desenvolvendo aplicações mobile com React Native e Expo, decidindo tencologias e criando abstrações para facilitar o desenvolvimento do restante do time"
              />
            </motion.div>
            <motion.div viewport={{ once: true }} initial={{ y: '30%', opacity: 0 }} whileInView={{ y: '0%', opacity: 1 }} transition={{ duration: 0.8 }}>
              <Componenets.Experience
                icon={<Icons.HardDrive />}
                title="Back end"
                description="Desenvolvimento de rest api em node js e manutenções rotineiras em sistemas robustos utilizando Lua"
              />
            </motion.div>
          </div>
          <div className="mt-16 flex flex-col gap-12">
            <div className="space-y-2">
              <p className={`text-primary text-lg ${inconsolata.className}`}>Projetos</p>
              <h2 className={`font-semibold text-foreground ${inconsolata.className}`}>
                Sempre que tenho tempo disponível estou aperfeiçoando e aprendendo coisas novas através dos meus projetos pessoais.
              </h2>
            </div>
            <Button asChild>
              <Link href={'/projetos'}>Acessar projetos</Link>
            </Button>
          </div>
        </section>
        {/* PROJETOS */}
        <Componenets.Footer />
      </main>
    </div>
  );
}

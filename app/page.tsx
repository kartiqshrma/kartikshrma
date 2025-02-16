import Image from "next/image";
import { Mail, Linkedin, Twitter, LinkIcon, Github } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { Button } from "../app/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left side - Fixed image with reduced width */}
      <div className="relative hidden w-[60%] lg:block fixed h-screen">
        <Image
          src="/nn.jpg"
          alt="My new portrait"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Right side - Scrollable Content */}
      <main className="ml-[5%] w-[65%] flex flex-col items-center p-6 overflow-y-auto">
        {/* Header */}
        <div className="w-full flex flex-col items-center mt-9">
          <p className="font-mono text-sm italic text-neutral-600">
            नोत्पादयन्नूनमुत्पादयेत्तत्त्वविदाम्।
          </p>
          <div className="mt-4 flex space-x-3">
            <Button variant="ghost" size="icon">
              <a href="mailto:kartiqshrma@gmail.com">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="https://github.com/kartiqshrma" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="https://leetcode.com/yourleetcode" target="_blank" rel="noreferrer">
                <SiLeetcode className="h-4 w-4 text-black" />
              </a>
            </Button>
            <Button variant="ghost" size="icon">
              <a href="#">
                <LinkIcon className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Introduction */}
        <div className="mt-14 text-center">
          <h1 className="mb-1 font-mono text-3xl font-medium">Hi, I'm kārtik/कार्तिक</h1>
          <p className="font-mono text-sm italic text-neutral-600">
            engineer, designer, and student of life.
          </p>
        </div>

        {/* Why Section */}
        <section className="mt-6 text-center">
          <h2 className="mb-2 font-mono text-xl font-medium">Why</h2>
          <p className="mb-3 text-sm text-neutral-600">
            exploring the vast landscape of neural networks, unraveling AI’s symphony in music.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <h3 className="font-mono text-sm italic">AI & Human Cognition</h3>
              <p className="text-xs text-neutral-500">science and art should go hand in hand</p>
            </div>
            <div>
              <h3 className="font-mono text-sm italic">Information Engineering</h3>
              <p className="text-xs text-neutral-500">analyze and interpret data to support decision-making</p>
            </div>
            <div>
              <h3 className="font-mono text-sm italic">Sustainable Living</h3>
              <p className="text-xs text-neutral-500">
                Tech, circular economy, consumer empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* What Section */}
        <section className="mt-6 text-center">
          <h2 className="mb-3 font-mono text-xl font-medium">What</h2>
          <Button variant="link" className="h-auto p-0 font-mono text-sm text-blue-500">
            <a href="#projects">📎 Projects</a>
          </Button>
          <p className="text-sm text-neutral-500">
            Undergraduate student at{" "}
            <a href="#" className="italic text-neutral-900 hover:underline">
              Jaypee University
            </a>
            . Focus: Java technologies, neural networks.
          </p>
          <p className="text-sm text-neutral-500">
            Co-running{" "}
            <a href="#" className="italic text-neutral-600 hover:underline">
              Bluepill
            </a>
            , building a reminder app to take your pills on time.
          </p>
        </section>

        {/* Who I Am Section */}
        <section className="mt-6 text-center">
          <h2 className="mb-2 font-mono text-xl font-medium">Who I Am</h2>
          <p className="text-sm text-neutral-500">
            I am currently an undergraduate student in{" "}
            <span className="font-medium">Information Technology</span> at{" "}
            <span className="italic">Jaypee University</span>. My interests span{" "}
            <span className="font-medium">AI and brain-computer interfaces</span> for learning,
            with a present focus on{" "}
            <span className="font-medium"></span> and{" "}
            <span className="font-medium"></span>.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Previously, I developed a platform that curates industry-specific questions,
            enabling users to refine their interview skills through{" "}
            <span className="font-medium">AI-powered mock sessions</span>, leveraging the{" "}
            <span className="italic">Gemini API</span> for real-time feedback and assessment.
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Currently, I’m exploring{" "}
            <span className="font-medium">WEKA</span>, an open-source tool for data mining and
            machine learning algorithms.
          </p>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center text-xs text-neutral-400">
          © 2025 Kartik. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

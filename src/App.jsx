
import { useEffect } from "react";
import "./App.css";

const sections = [
  {
    number: "01",
    title: "Gaining a New Perspective",
    image: "/treesnetwork.jpg",
    imageAlt: "Trees connected through a network, representing relationships in nature",
    caption:
      "Nature reminds us that nothing exists in isolation. We depend on one another and the world around us.",
    text: (
      <>
        Surrounded by technology every day, I have always seen software as a
        tool for making things easier and faster. However, analyzing the
        Thanksgiving Address changed how I think about what I build and why.
        Its emphasis on gratitude and mutual responsibility reminds us that{" "}
        <span className="highlight-quote">
          “cultures of gratitude must also be cultures of reciprocity”
        </span>{" "}
        (Kimmerer 115). I realized that progress is not simply about what
        technology can do, but how what we create can give back to our
        communities.
      </>
    ),
  },
  {
    number: "02",
    title: "Putting it into practice",
    image: "/dinawademo.jpg",
    imageAlt: "A demonstration of the Dinawa project",
    caption:
      "Building Dinawa gave me a chance to turn my belief in reciprocity into something tangible.",
    text: (
      <>
        As an aspiring software engineer, I want to create technology that serves communities 
        rather than benefiting only those who build it. The Haudenosaunee teachings strengthened 
        my belief that technology should reflect the reciprocity we see in nature (Elementary Teachers’ Federation of Ontario 7). 
        I applied this idea during a hackathon by building Dinawa, a web app that uses machine learning to help people engage with 
        Ojibwe in the city I call home. Rather than simply translating words, we wanted Dinawa to explain where, when, and why certain 
        words and phrases are used, connecting language to the places, history, and culture they represent.

      </>
    ),
  },
  {
    number: "03",
    title: "Looking Beyond the Code",
    image: "/treeplanting.jpg",
    imageAlt: "Community members planting trees",
    caption:
      "Reciprocity in Action: Giving back to the world that sustains us, one small action at a time.",
    text: (
      <>
       The Thanksgiving Address helped me understand that we all have a responsibility 
       to support the living world and one another. Applying this principle to software 
       development has shown me that technology can do more than make life easier; it can 
       create connections, encourage inclusion, and give back to communities. Building Dinawa 
       showed me that even the code I write can be guided by reciprocity. However, meaningful 
       technology requires more than good intentions. We must listen to Indigenous voices, respect 
       the communities whose knowledge we engage with, and support Indigenous-led initiatives. 
       Ultimately, reciprocity means looking beyond what we can build and asking how what we build can 
       contribute to the people and relationships around us.

      </>
    ),
  },
];

function ReflectionSection({ section, reverse }) {
  return (
    <section
      className={`reflection-section reveal ${reverse ? "reverse" : ""}`}
      id={`section-${section.number}`}
    >
      <div className="image-column">
        <div className="image-frame">
          <img
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
          />
          <span className="image-number">{section.number}</span>
        </div>
        <p className="image-caption">{section.caption}</p>
      </div>

      <article className="text-panel">
        <div className="section-label">
          <span>SECTION {section.number}</span>
          <span className="label-line" />
        </div>

        <h2>{section.title}</h2>

        <div className="section-copy">
          <p>{section.text}</p>
        </div>

        <a className="text-link" href="#conclusion">
          Continue reading <span aria-hidden="true">↓</span>
        </a>
      </article>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">A PERSONAL REFLECTION · NBE3UE</span>
          
<h1>
  Reciprocity in the
  <br />
  <span>Modern Age.</span>
</h1>

<p className="hero-description">
  Rethinking technology, community, and my relationship with the
  world through the teachings of the Thanksgiving Address.
</p>


          <div className="hero-footer">
            <span>MAAZ SIDDIQUI</span>
            <a href="#section-01">
              EXPLORE THE REFLECTION <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="hero-decoration" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>

      <div className="page-content">
        <div className="intro reveal">
          <span className="section-label">THE REFLECTION</span>
          <p>
            What changes when gratitude becomes more than a feeling and
            becomes a responsibility?
          </p>
        </div>

        {sections.map((section, index) => (
          <ReflectionSection
            key={section.number}
            section={section}
            reverse={index === 1}
          />
        ))}

        
<section className="conclusion reveal" id="conclusion">
  <span className="eyebrow">LOOKING FORWARD</span>

  <h2>
    Gratitude is
    <br />
    <span>something we do.</span>
  </h2>

  <p>
    The Thanksgiving Address has reminded me that everything we create
    exists within a wider network of relationships. Moving forward, I want
    to measure progress not only by what I accomplish, but also by how I
    contribute, what I protect, and who benefits from my work.
  </p>

  <a className="conclusion-link" href="#works-cited">
    Explore the ideas behind this reflection
    <span aria-hidden="true">↓</span>
  </a>
</section>

<footer className="works-cited reveal" id="works-cited">
  <div className="works-heading">
    <span className="section-label">SOURCES & REFERENCES</span>
    <h2>Works Cited</h2>
  </div>

  <div className="citation-list">

    <p>
      “Awareness and Community Stewardship.” <em>Tree Canada</em>,
      31 July 2025,
      {" "}
      <a
        href="https://treecanada.ca/urban-forestry-guide/awareness-and-community-stewardship/"
        target="_blank"
        rel="noreferrer"
      >
        https://treecanada.ca/urban-forestry-guide/awareness-and-community-stewardship/
      </a>.
      Accessed 28 Oct. 2026.
    </p>
    <p>
      Elementary Teachers’ Federation of Ontario.
      <em> Who Are the Haudenosaunee?</em> Feb. 2022.
    </p>

    <p>
      “How Trees Secretly Talk to Each Other.” <em>YouTube</em>,
      uploaded by BBC News, 2018,
      {" "}
      <a
        href="https://www.youtube.com/watch?v=yWOqeyPIVRo"
        target="_blank"
        rel="noreferrer"
      >
        https://www.youtube.com/watch?v=yWOqeyPIVRo
      </a>.
    </p>

    <p>
      Kimmerer, Robin Wall. <em>Braiding Sweetgrass: Indigenous Wisdom,
      Scientific Knowledge, and the Teachings of Plants</em>.
      Milkweed Editions, 2013.
    </p>

    <p>
      Siddiqui, Maaz. <em>Photograph of My Team Building Dinawa at
      SaugaHacks</em>. 12 Sept. 2026. Author’s Personal Collection.
    </p>
  </div>

  <div className="footer-bottom">
    <span>MAAZ SIDDIQUI</span>
    <span>GRATITUDE · COMMUNITY · CONNECTION</span>
    <a
      href="#top"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      BACK TO TOP ↑
    </a>
  </div>
</footer>


      </div>
    </main>
  );
}

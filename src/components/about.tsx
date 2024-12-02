"use client";

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface EditableContent {
  id: number;
  content: string;
}

const About: React.FC = () => {
  const [editMode, setEditMode] = useState<{ id: number } | null>(null);
  const [editValue, setEditValue] = useState("");
  const [sections, setSections] = useState<EditableContent[]>([
    {
      id: 1,
      content:
        "GRECOM est une entreprise spécialisée dans la production et la vente des produits apicoles et agricoles en République Démocratique du Congo. Nous envisageons un monde avec des revenus décents et des moyens de subsistance durables pour tous grâce à l’entrepreneuriat vert. Nous conseillons nos clients sur la manière de cocréer des opportunités économiques durables à travers nos thématiques principaux d'entreprise responsable, de développement des systèmes de production apicole et agricole durable.",
    },
    {
      id: 2,
      content:
        "L’application des technologies pour le développement et énergie durable. Nos clients sont basés principalement en République Démocratique du Congo et d’autres à travers Afrique.",
    },
  ]);

  // Initialisation d'AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  const handleDoubleClick = (id: number, currentValue: string) => {
    setEditMode({ id });
    setEditValue(currentValue);
  };

  const handleBlur = () => {
    if (editMode) {
      setSections((prev) =>
        prev.map((section) =>
          section.id === editMode.id ? { ...section, content: editValue } : section
        )
      );
      setEditMode(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>A propos</h2>
        <p>Qui sommes-nous ?</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {sections.map((section) => (
            <div
              key={section.id}
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay={section.id * 100}
            >
              {editMode?.id === section.id ? (
                <textarea
                  value={editValue}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoFocus
                  className="form-control"
                  rows={5}
                />
              ) : (
                <p
                  onDoubleClick={() => handleDoubleClick(section.id, section.content)}
                  style={{ cursor: "pointer" }}
                >
                  {section.content}
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="300">
          <a href="#" className="read-more">
            <span>En savoir plus</span>
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
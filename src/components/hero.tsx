"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { loadSlides, updateSlide } from "@/store/slidesSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const slides = useSelector((state: RootState) => state.slides.slides);
  const [editMode, setEditMode] = useState<{ id: number; field: string } | null>(null);
  const [editValue, setEditValue] = useState("");

  // Initialisation des animations AOS
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
      delay: 100,
      offset: 200,
    });
  }, []);

  // Charger les slides via Redux
  useEffect(() => {
    dispatch(loadSlides());
  }, [dispatch]);

  const handleDoubleClick = (id: number, field: string, currentValue: string) => {
    setEditMode({ id, field });
    setEditValue(currentValue);
  };

  const handleBlur = () => {
    if (editMode) {
      dispatch(updateSlide({ id: editMode.id, data: { [editMode.field]: editValue } }));
      setEditMode(null);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div
        id="hero-carousel"
        className="container carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-aos="fade-up"
            >
              <div className="carousel-container">
                {editMode?.id === slide.id && editMode.field === "title" ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className="editable-input"
                    style={{
                      maxWidth: "90%",
                      fontSize: "2rem",
                      textAlign: "center",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "5px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                    }}
                  />
                ) : (
                  <h2
                    className="animate__animated animate__fadeInDown"
                    onDoubleClick={() => handleDoubleClick(slide.id, "title", slide.title)}
                  >
                    {slide.title}
                  </h2>
                )}
                {editMode?.id === slide.id && editMode.field === "description" ? (
                  <textarea
                    value={editValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
                    className="editable-textarea"
                    style={{
                      maxWidth: "90%",
                      fontSize: "1rem",
                      textAlign: "justify",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "8px",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                      resize: "none",
                    }}
                  />
                ) : (
                  <p
                    className="animate__animated animate__fadeInUp"
                    onDoubleClick={() =>
                      handleDoubleClick(slide.id, "description", slide.description)
                    }
                  >
                    {slide.description}
                  </p>
                )}
                <a
                  href={slide.button.link}
                  className="btn-get-started animate__animated animate__fadeInUp scrollto"
                >
                  {slide.button.text}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contrôles du carousel */}
        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
        </a>
      </div>

      {/* Ondes décoratives */}
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use xlinkHref="#wave-path" x="50" y="3"></use>
        </g>
        <g className="wave2">
          <use xlinkHref="#wave-path" x="50" y="0"></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9"></use>
        </g>
      </svg>
    </section>
  );
};

export default Hero;
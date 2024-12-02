"use client";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { updateSlide, loadSlides } from "@/store/slidesSlice";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const slides = useSelector((state: RootState) => state.slides.slides);
  const [editMode, setEditMode] = useState<{ id: number; field: string } | null>(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    dispatch(loadSlides());
  }, [dispatch]);

  useEffect(() => {
    const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
    bootstrap.Carousel?.getInstance(document.getElementById("hero-carousel"))?.cycle();
    AOS.refresh();
  }, [slides]);

  const handleDoubleClick = (id: number, field: string, currentValue: string) => {
    setEditMode({ id, field });
    setEditValue(currentValue);
  };

  const handleBlur = () => {
    if (editMode) {
      dispatch(
        updateSlide({
          id: editMode.id,
          data: { [editMode.field]: editValue },
        })
      );
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
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={slide.id}
            >
              <div className="carousel-container">
                {editMode?.id === slide.id && editMode.field === "title" ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoFocus
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

        <a
          className="carousel-control-prev"
          href="#hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bi bi-chevron-left"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bi bi-chevron-right"
            aria-hidden="true"
          ></span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
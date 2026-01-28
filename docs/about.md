# Portfolio Revamp: Project Specification

## Overview
This document outlines the features, UI/UX design, and technical structure for the revamped portfolio website. The goal is to create a highly impressive, data-driven, and configurable personal website that showcases projects and milestones with advanced animations and a premium feel.

## User Profile & Narrative
- **Current Role**: Data Engineer (1 year experience).
- **Education**: Bachelor in Information Systems (Graduated) → Incoming Master in Computer Science at the University of Sydney.
- **Freelance**: Open to work, currently building an automated reconciliation engine for a business client.
- **Personality**: Professional but personalized; distinct from generic AI templates. High emphasis on personal photos and genuine storytelling.

## Technical Stack
- **Framework**: React (Vite)
- **Styling**: Vanilla CSS (Premium, Minimalist)
- **Animations**: Framer Motion (Sophisticated transitions)
- **Configuration**: JSON-based (`src/config/portfolio.json`)
- **Deployment**: GitHub Pages

## UI/UX Design Goals
- **Clean Aesthetic**: Minimalist, premium feel. Maximum whitespace, refined typography (Inter/Outfit).
- **Personalized Touch**: Integration of personal photography to avoid a "template" look.
- **Advanced Animations**: Staggered reveals, parallax effects, and smooth layout transitions (handled via Framer Motion).
- **Modular Timeline**: A visual journey from Bachelor's in IS → Data Engineering → Master's in CS (USyd) → Freelance.
- **Project Showcase**: Configurable links for GitHub, Demos, and external PDFs/Docs.

## Config Structure (Planned)
- `bio`: Basic info (Name, Role, Description, Socials).
- `timeline`: List of events with dates and descriptions.
- `projects`: Detailed project objects with media and links.
- `skills`: Categorized skill sets.

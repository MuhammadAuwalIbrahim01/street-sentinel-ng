# SAFESTREET NG - Implementation Plan

## Project Overview
SAFESTREET NG is an anonymous crime and cyber-threat reporting platform for Nigeria. It leverages AI for classification, GIS for mapping, and provides a secure, accessible interface for citizens and agencies.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Leaflet.js (for GIS).
- **Backend**: Flask (Python) - *To be scaffolded in a `server/` directory*.
- **Database**: SQLite (for development).
- **AI**: NLP-based keyword analysis and rule-based priority engine.

---

## Daily Milestones

### Day 1: System Architecture & Foundation
- **Focus**: Setting up the project structure, backend scaffold, and database schema.
- **Components**:
    - Project folder structure.
    - Flask server initialization.
    - Database models (SQLAlchemy).
    - Basic API endpoints for health checks.
- **Security**: Environment variable configuration, initial CORS setup.

### Day 2: Core Reporting Backend & AI Classification
- **Focus**: Building the anonymous reporting engine.
- **Components**:
    - Report submission API (Anonymous).
    - Unique Tracking ID generation.
    - AI Classification Engine (NLP keywords for Crime, Cyber, Scam, etc.).
    - Priority Detection Logic (Severity levels).
- **Security**: Rate limiting, Input validation.

### Day 3: Frontend Foundation & Anonymous Report UI
- **Focus**: User interface for reporting.
- **Components**:
    - Modern, accessible landing page.
    - Multi-step reporting form (Physical, Cyber, etc.).
    - Voice reporting integration (Speech-to-Text).
    - Language switcher (English, Hausa, Yoruba, Igbo).
- **UX**: Responsive design, accessible forms.

### Day 4: GIS Mapping System (Leaflet.js)
- **Focus**: Geographic visualization of threats.
- **Components**:
    - Interactive map integration.
    - Incident markers and clustering.
    - Risk zones and hotspot heatmaps.
    - Location picking for reports.

### Day 5: Threat Intelligence & Admin Dashboards
- **Focus**: Data visualization and management.
- **Components**:
    - Public Intelligence Dashboard (Trends, Stats).
    - Admin Dashboard (Review, Management, Analytics).
    - Real-time Alert system (UI notifications).
- **Security**: Admin authentication (simulated or session-based).

### Day 6: Final Integration, Security & Documentation
- **Focus**: Hardening and handover.
- **Components**:
    - XSS/CSRF protection review.
    - Testing suite (Unit and Integration).
    - Deployment guides (Render/Netlify).
    - Project documentation (CV-ready).

---

## Execution Handoff

### Phase 1: Foundation (Day 1)
- **Agent**: `frontend_engineer` (to scaffold the full-stack structure)
- **Scope**:
    - Setup `server/` directory with Flask and SQLite.
    - Create database models in `server/models.py`.
    - Setup `src/` for React frontend.
    - Define common types and API client.
- **Acceptance Criteria**:
    - Flask server runs and connects to SQLite.
    - React frontend can ping the backend.
    - Project structure matches the "Senior Architect" requirements.

### Phase 2: Intelligence & UI (Day 2-3)
- **Agent**: `frontend_engineer`
- **Scope**:
    - Implement the AI classification logic in the backend.
    - Build the Reporting Form UI with Voice support.
    - Implement multi-language support (i18n).
- **Acceptance Criteria**:
    - User can submit a report anonymously.
    - Report is classified automatically by the backend.
    - Voice-to-text works for description field.

### Phase 3: GIS & Dashboards (Day 4-5)
- **Agent**: `frontend_engineer`
- **Scope**:
    - Leaflet.js integration for Map and Dashboard.
    - Heatmap and marker logic.
    - Admin dashboard layout.
- **Acceptance Criteria**:
    - Incidents appear on the map.
    - Dashboards show correct statistics from the DB.

### Phase 4: Security & Polish (Day 6)
- **Agent**: `quick_fix_engineer`
- **Scope**:
    - Security headers, input sanitization, and UI polish.
    - Final documentation files (README.md, SECURITY.md).

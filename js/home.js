/**
 * BiSKY Team — Home Page Logic
 * Populates dynamic sections on the homepage with real data
 */
document.addEventListener('DOMContentLoaded', () => {

  /* —— Projects Preview Grid —— */
  const projectsGrid = document.getElementById('home-projects-grid');
  if (projectsGrid) {
    const previewProjects = [
      BISKY.projects.rockets.find(r => r.id === 'charlie'),
      BISKY.projects.engines.find(m => m.id === 'm1'),
      BISKY.projects.infrastructures.find(i => i.id === 'launch-rail'),
      BISKY.projects.rd.find(r => r.id === 'carbon-fiber-tank')
    ].filter(Boolean);

    previewProjects.forEach((project, i) => {
      const statusClass = BISKY.getStatusClass(project.status);
      const card = document.createElement('a');
      card.href = `pages/project-detail.html?id=${project.id}`;
      card.className = 'project-card reveal reveal-delay-' + (i + 1);
      card.innerHTML = `
        <div class="project-card__image">
          <div class="project-card__image-placeholder">${project.name}</div>
        </div>
        <div class="project-card__body">
          <div class="project-card__meta">
            <span class="project-card__category">${BISKY.getCategoryLabel(project.category)}</span>
          </div>
          <h3 class="project-card__title">${project.name}</h3>
          <p class="project-card__tagline">${project.tagline}</p>
          <div class="project-card__footer">
            <span class="status-badge ${statusClass}">${project.status}</span>
            <span class="project-card__arrow">→</span>
          </div>
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  /* —— Technology / Key Areas Grid —— */
  const deptsGrid = document.getElementById('departments-grid');
  if (deptsGrid) {
    const keyAreas = [
      { icon: '⊘', name: 'Hybrid Propulsion', desc: 'Design and testing of hybrid rocket engines using liquid oxidizer and solid fuel. From M1 — the first Spanish university hybrid engine — to the current M3.' },
      { icon: '⊡', name: 'Avionics & EROS', desc: 'Custom flight computers, telemetry, inertial sensors, and the EROS electronics platform — all designed and manufactured by the team.' },
      { icon: '◈', name: 'Aerostructure', desc: 'Structural design, FEA analysis, and manufacturing of airframes and components using advanced composite materials.' },
      { icon: '⊙', name: 'Recovery Systems', desc: 'Parachute deployment mechanisms, ejection systems, and safe recovery algorithms validated across multiple flights.' },
      { icon: '⊞', name: 'Manufacturing', desc: 'In-house fabrication of all rocket components — from carbon fiber layups to metal machining and 3D printing.' },
      { icon: '◎', name: 'R&D', desc: 'Ongoing research in carbon fiber COPV tanks, avionics cost reduction, and next-generation propulsion technologies.' }
    ];

    keyAreas.forEach((area, i) => {
      const card = document.createElement('div');
      card.className = 'dept-card reveal reveal-delay-' + (i + 1);
      card.innerHTML = `
        <div class="dept-card__icon">${area.icon}</div>
        <h3 class="dept-card__name">${area.name}</h3>
        <p class="dept-card__desc">${area.desc}</p>
      `;
      deptsGrid.appendChild(card);
    });
  }

  /* —— Team Preview Grid (25-26 leadership) —— */
  const teamGrid = document.getElementById('team-grid');
  if (teamGrid) {
    const yearData = BISKY.getYearData('25-26');
    if (yearData) {
      // Show leadership + project managers
      const previewMembers = [
        ...yearData.leadership,
        ...(yearData.projectManagers || []).slice(0, 6)
      ];

      previewMembers.forEach((member, i) => {
        const initials = member.name.split(' ').map(w => w[0]).join('').slice(0, 2);
        const photoPath = BISKY.getMemberPhoto(member.name, 'assets/members/');
        const card = document.createElement('a');
        card.href = `pages/member-profile.html?name=${encodeURIComponent(member.name)}&year=25-26`;
        card.className = 'member-card reveal reveal-delay-' + Math.min(i + 1, 5);
        
        const avatarContent = photoPath 
          ? `<img src="${photoPath}" alt="${member.name}" loading="lazy">` 
          : initials;

        const roleLabel = member.project 
          ? `${BISKY.getPositionName(member.position)} — ${member.project}` 
          : BISKY.getPositionName(member.position);

        card.innerHTML = `
          <div class="member-card__avatar">${avatarContent}</div>
          <div class="member-card__name">${member.name}</div>
          <div class="member-card__role">${roleLabel}</div>
        `;
        teamGrid.appendChild(card);
      });
    }
  }

  /* —— Sponsors Preview —— */
  const sponsorsLogos = document.getElementById('sponsors-logos');
  if (sponsorsLogos) {
    const topSponsors = BISKY.sponsors.list
      .filter(s => ['cosmos', 'galaxy', 'nebula'].includes(s.tier))
      .slice(0, 10);

    topSponsors.forEach(sponsor => {
      const el = document.createElement('div');
      el.className = 'home-sponsors__logo';
      el.textContent = sponsor.name;
      sponsorsLogos.appendChild(el);
    });
  }

});

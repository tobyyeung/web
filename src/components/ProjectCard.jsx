import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-hoverable">
        
        {/* Image Header */}
        <div style={{ marginBottom: '1.5rem', width: '100%' }}>
          <img 
            src={project.imageUrl || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&sig=${index}`} 
            alt={project.title} 
            style={{ borderRadius: 'var(--radius-md)', width: '100%', height: '200px', objectFit: 'cover', boxShadow: 'var(--shadow-sm)' }}
          />
        </div>

        {/* Title */}
        <div style={{ marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.75rem', margin: 0 }}>{project.title}</h3>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <p 
            style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.6' }}
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
          
          {/* Spacer to push buttons to bottom */}
          <div style={{ flex: 1 }}></div>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Source Code
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;

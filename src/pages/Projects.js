import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import SortableProjectCard from '../components/SortableProjectCard';
import './Projects.css';

const Projects = () => {
  // 10 static projects
  const staticProjects = [
    {
      id: '1',
      title: 'Data Analysis and Visualization',
      description: 'Analyzed MyAnimeList trends with data analysis tools.',
      image: '/images/project1.jpeg',
      github: 'https://github.com/yourusername/data-analysis'
    },
    {
      id: '2',
      title: 'Technical Writing',
      description: 'Comprehensive documentary on the Pakistan Software Export Board (PSEB).',
      image: '/images/project2.jpeg',
      github: 'https://github.com/yourusername/technical-writing'
    },
    {
      id: '3',
      title: 'Dynamic Website',
      description: 'Dynamic e-commerce website automation for VAPEZ, a fully equipped online vape shop.',
      image: '/images/project3.jpeg',
      github: 'https://github.com/yourusername/dynamic-website'
    },
    {
      id: '4',
      title: 'MedWeb',
      description: 'SQL-based medical center website with data visualization features.',
      image: '/images/project4.png',
      github: 'https://github.com/yourusername/medweb'
    },
    {
      id: '5',
      title: 'Data Structures',
      description: 'Implemented search engine using Binary Search Trees (BST).',
      image: '/images/project5.png',
      github: 'https://github.com/yourusername/data-structures'
    },
    {
      id: '6',
      title: 'Assembly Language',
      description: 'Low-level assembly language implementation of a Tic Tac Toe game.',
      image: '/images/project6.png',
      github: 'https://github.com/yourusername/assembly-tictactoe'
    },
    {
      id: '7',
      title: 'Digital Logic Design',
      description: 'Created a speedometer project based on digital logic design theory.',
      image: '/images/project7.jpeg',
      github: 'https://github.com/yourusername/digital-logic'
    },
    {
      id: '8',
      title: 'Object-Oriented Programming',
      description: 'Developed an object-oriented Pacman game in C++.',
      image: '/images/project8.jpeg',
      github: 'https://github.com/yourusername/oop-pacman'
    },
    {
      id: '9',
      title: 'Programming Fundamentals',
      description: 'Implemented a Connect 4 game.',
      image: '/images/project9.jpg',
      github: 'https://github.com/yourusername/connect4'
    },
    {
      id: '10',
      title: 'Image Processing',
      description: 'Developed an image processing program in C++.',
      image: '/images/project10.png',
      github: 'https://github.com/yourusername/image-processing'
    }
  ];

  const [projectsData, setProjectsData] = useState(staticProjects);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchDynamicProjects = async () => {
      if (hasFetched) return; // Prevent duplicate fetches

      try {
        const response = await axios.get('https://api.github.com/users/pgl10/repos');
        const dynamicProjects = response.data.slice(0, 5).map((repo) => ({
          id: repo.id.toString(),
          title: repo.name,
          description: repo.description || 'No description available.',
          image: repo.owner.avatar_url,
          github: repo.html_url
        }));

        // Merge static and dynamic projects, ensuring no duplicates
        setProjectsData((prevProjects) => {
          const uniqueProjects = prevProjects.concat(dynamicProjects).filter(
            (value, index, self) =>
              index === self.findIndex((p) => p.github === value.github) // Ensure no duplicates by GitHub URL
          );
          return uniqueProjects;
        });

        setHasFetched(true); // Mark dynamic fetching as done
      } catch (error) {
        console.error('Error fetching dynamic projects:', error);
      }
    };

    fetchDynamicProjects();
  }, [hasFetched]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = projectsData.findIndex((project) => project.id === active.id);
    const newIndex = projectsData.findIndex((project) => project.id === over.id);

    setProjectsData((prevProjects) => arrayMove(prevProjects, oldIndex, newIndex));
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">Projects</h2>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={projectsData} strategy={rectSortingStrategy}>
          <div className="projects-list">
            {projectsData.map((project) => (
              <SortableProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Projects;

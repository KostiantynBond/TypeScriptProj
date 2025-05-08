import './ContactsPage.scss'

import React from "react";

type TeamMember = {
  name: string;
  role: string;
  github: string;
  telegram: string;
  avatar: string;
};

const teamMembers: TeamMember[] = [

  {
    name: 'Kostiantyn Bondar',
    role: 'Developer',
    github: 'https://github.com/YoNiga7',
    telegram: 'https://t.me/kavalok626',
    avatar: 'https://avatars.githubusercontent.com/u/91181748?v=4',
  },
  
];

export const ContactsPage: React.FC = () => {

  return (
    <div className="team-page">
      <div className="team-page__headline-block headline-block">
        <h1 className="headline-block__headline headline--1">Developer</h1>
        <p className="headline-block__subtitle">very <s>professional</s></p>
      </div>
      
      <div className="team-page__list">
        {teamMembers.map((member) => (
          <div key={member.github} className="team-page__member">
            <img
              src={member.avatar}
              alt={`${member.name}'s avatar`}
              className="team-page__avatar"
            />
            <h2 className="team-page__name">{member.name}</h2>
            <p className="team-page__role">{member.role}</p>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-page__social"
            >
              GitHub Profile
            </a>
            <a
              href={member.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="team-page__social"
            >
              Telegram Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

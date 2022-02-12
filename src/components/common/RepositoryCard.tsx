import styled from "styled-components";
import React from "react";
import StarLogo from "./icons/star.svg";
import { format } from "timeago.js";

const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 12px 0px 12px 12px;
  margin-top: 16px;
  display: flex;

  :hover {
    box-shadow: 0px 2px 6px rgba(182, 182, 182, 0.25);
  }
`;

const LogoCard = styled.div`
  background-color: #ff5555;
  border-radius: 40px;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  color: #ffffff;
  margin-right: 12px;
`;

const Avatar = styled.img`
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  margin-right: 12px;
`;
const DiscriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:first-child > span:first-child {
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
  }
  div:first-child > span:last-child:hover {
    color: #208fbf;
  }
  div > span {
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #7e7e7e;
  }
  div:first-child > span {
    display: block;
    margin-bottom: 4px;
  }
  div:last-child > span {
    margin-left: 4.52px;
  }
  div:last-child > span:last-child {
    margin-left: 20px;
  }
`;

export interface RepoOwner {
  avatar_url: string;
}

export interface RepoData {
  name: string;
  full_name?: string;
  html_url: string;
  description?: string;
  fork?: boolean;
  forks_count?: number;
  stargazers_count: number;
  watchers_count?: number;
  size?: number;
  default_branch?: string;
  open_issues_count?: number;
  org?: string;
  updated_at: string;
  owner?: RepoOwner;
  avatar_url?: string;
}

const RepositoryCard: React.FC<RepoData> = (props) => {
  return (
    <a href="#">
      <CardContainer>
        {props.avatar_url ? (
          <Avatar src={props.avatar_url} alt="" />
        ) : (
          <LogoCard>
            <span>K</span>
          </LogoCard>
        )}

        <DiscriptionContainer>
          <div>
            <span>{props.name}</span>
            <span>{props.org}</span>
          </div>
          <div>
            <img src={StarLogo} alt="" />
            <span>{props.stargazers_count}</span>
            <span>{format(props.updated_at, "ru_RU")}</span>
          </div>
        </DiscriptionContainer>
      </CardContainer>
    </a>
  );
};

export default RepositoryCard;

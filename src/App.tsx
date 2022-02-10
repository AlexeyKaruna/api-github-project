import styled from "styled-components";
import React from "react";
import ButtonSearch from "./components/common/SearchButton";
import RepositoryCard from "./components/common/RepositoryCard";
import { useState } from "react";
import { RepoData } from "./components/common/RepositoryCard";
const StyledApp = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 62px;
`;

const SearchInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 17px 75px 17px 12px;
  margin-bottom: 4px;
  height: 50px;

  :hover {
    border: 1px solid #ff5555;
  }
  :disabled {
    background: #f9f9f9;
  }
`;

const App: React.FC = () => {
  const [dataRepositories, setData] = useState<RepoData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [orgInput, setOrgInput] = useState<string>("");

  const handleSearch = (e: any) => {
    setOrgInput(e.target.value);
  };

  const handleSubmit = () => {
    let url = `https://api.github.com/users/${orgInput}/repos`;
    fetch(url)
      .then((rep) => rep.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
          setError(null);
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.toString());
      });
  };
  return (
    <StyledApp>
      <Header>
        <SearchInput
          placeholder="Введите название организации"
          onChange={handleSearch}
          value={orgInput}
        />
        <ButtonSearch onClick={handleSubmit} disabled={orgInput.length === 0} />
      </Header>

      {error ? (
        <h1>{error}/</h1>
      ) : (
        dataRepositories.map(function (item) {
          return (
            <RepositoryCard
              key={item.name}
              name={item.name}
              org={orgInput}
              updated_at={item.updated_at}
              html_url={item.html_url}
              stargazers_count={item.stargazers_count}
              avatar_url={item.owner?.avatar_url}
            />
          );
        })
      )}
    </StyledApp>
  );
};

export default App;

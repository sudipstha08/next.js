/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from "react";
import { SWAPI_API } from "../../../../utils/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { Wrapper } from "./style";
import Router from "next/router";
import { Message, Loader } from "../../../atom";

interface IResponse extends AxiosResponse {
  results?: any;
}

const Planets = () => {
  const [page, setPage] = useState(1);
  const fetchPlanets = async ({ queryKey }: any) => {
    console.log("params", queryKey);
    const [page] = queryKey;
    const response = await SWAPI_API.get<IResponse>(`/planets?page=${page}`);
    return response.data;
  };
  const { data, status, refetch } = useQuery(["planets", page], fetchPlanets, {
    keepPreviousData: false,
  });
  const getState = (status: string) => {
    if (status === "loading") {
      return <Loader size="large" className="loader" />;
    }
    if (status === "error") {
      return <Message type="error" content="Error fetching planets" />;
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    Router.push(`/star-wars?planets=true&page=${page}`);
  }, [page]);

  return (
    <Wrapper>
      <h1>Planets</h1>
      {getState(status)}
      <div className="btn-wrapper">
        <button onClick={() => setPage(1)}>Page 1</button>
        <button onClick={() => setPage(2)}>Page 2</button>
        <button onClick={() => setPage(3)}>Page 3</button>
        <button onClick={() => setPage(4)}>Page 4</button>
        <button onClick={() => setPage(5)}>Page 5</button>
      </div>

      {data?.results?.map((planet: any, idx: number) => {
        return (
          <div key={`${planet.name}-${idx}`} className="planet-card">
            <h3>
              <strong>{planet.name}</strong>
            </h3>
            <p>Population - {planet.population}</p>
            <p>Terrain - {planet.terrain}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export { Planets };

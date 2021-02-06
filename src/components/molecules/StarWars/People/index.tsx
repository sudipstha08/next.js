/* eslint-disable no-console */
import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { SWAPI_API } from "../../../../utils/api";
import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import moment from "moment";
import { Message, Loader } from "../../../atom";

interface IResponse extends AxiosResponse {
  results?: any;
}

const People = () => {
  const fetchPeople = async () => {
    const response = await SWAPI_API.get<IResponse>("/people");
    return response.data;
  };
  const { data, status, refetch } = useQuery("peoples", fetchPeople, {
    refetchOnWindowFocus: false,
    staleTime: 2000, // DATA WILL REMAIN FRESH FOR 2SEC
    cacheTime: 10000,
    onSuccess: () => console.log("hello"),
  });
  const getState = (status: string) => {
    // if (status === "success") {
    //   return <Message type="success" content="Peoples fetched successfully" />;
    // }
    if (status === "loading") {
      return <Loader size="large" />;
    }
    if (status === "error") {
      return <Message type="error" content="Error fetching peoples" />;
    }
  };

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Wrapper>
      <h1>People</h1>
      {getState(status)}
      {data?.results?.map((people: any, idx: number) => {
        return (
          <div key={`${people.name}-${idx}`} className="people-card">
            <h3>
              <strong>{people.name}</strong>
            </h3>
            <p>Birth Year - {people.birth_year}</p>
            <p>Hair color - {people.hair_color}</p>
            <p>Height - {people.height}</p>
            <p>Created Date - {moment(people.created).format("YYYY/MM/DD")}</p>
          </div>
        );
      })}
    </Wrapper>
  );
};

export { People };

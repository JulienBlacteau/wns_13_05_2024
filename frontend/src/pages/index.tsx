import React from 'react';
import { useQuery } from "@apollo/client";
import Header from "@/components/Header";
import { Country } from '@/types';
import CountryForm from '@/components/Form';
import { LIST_COUNTRY } from '@/request/queries/country.queries';
import Card from '@/components/card';
import styles from '@/styles/components/countrycard.module.css'

export default function Home() {
  const { loading, error, data } = useQuery(LIST_COUNTRY); // Exécutez la requête GraphQL

  if (loading) return <p>Loading...</p>; // Affichez un indicateur de chargement pendant le chargement des données
  if (error) return <p>Error: {error.message}</p>; // Affichez un message d'erreur en cas d'erreur


  return (
    <div>
      <Header />
      <CountryForm/>
      <h1 className={styles.countrycardtitle}>Liste des pays :</h1>
      <ul className={styles.countrycard}>
        {data.countries.map((country: Country, index: number) => (
          <Card key={index} id={country.id} name={country.name} emoji={country.emoji} />
        ))}
      </ul>
    </div>
  );
}
import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { MyForm } from "@/components/MyForm/MyForm"
import { SyntheticEvent, useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import './App.css'
import FilterableDriversGallery from "./components/FilerableDriversGallery/FilterableDriversGallery";
import { FilterSelect }  from "./components/FilterSelect/FilterSelect"
import { useQuery } from 'react-query';
import { driverType } from "./types/types";
import { fetchAllRequest } from "./utils/APIcalls";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city)
    
  }

  const handleAddDriverClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const { data: drivers = [], refetch, isLoading, isError } = useQuery(
    ['drivers', selectedCity],
    () => fetchAllRequest(selectedCity),
    {
      enabled: !!selectedCity,
    }
  );
  
  
  console.log('Selected city:', selectedCity);
  console.log('Drivers:', drivers);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching drivers</div>;
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error fetching data</div>;

  // const driversByCity = selectedCity 
  // ? data?.filter((driver) => driver.city === selectedCity)
  // : data ;


  return (
    <>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme" >
      <ModeToggle />
      <section className="content">
        <header className="mainpage-header">
          <h1 className="mainpage-header__title">Welcome to my site</h1>
          <FormButton onClick={handleAddDriverClick} />
        </header>
        <MyForm isOpen={isModalOpen} onClose={handleCloseModal}/>  
        <FilterSelect onChange={handleSelectedCity}/>
        <FilterableDriversGallery drivers = {drivers} selectedCity={selectedCity}/>
      </section>
    </ThemeProvider>
    </>
  )
}

export default App

import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { MyForm } from "@/components/MyForm/MyForm"
import { useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import './App.css'
import FilterableDriversGallery from "./components/FilerableDriversGallery/FilterableDriversGallery";
import { SelectForm }  from "./components/FilterSelect/FilterSelect"
import { useQuery } from 'react-query';
import { driversType } from "./types/types";
import { fetchAllRequest } from "./utils/APIcalls";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDriverClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const {data, isLoading, isError} = useQuery<driversType>('drivers', () => fetchAllRequest());

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;


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
        <SelectForm />
        <FilterableDriversGallery drivers = {data} />
      </section>
    </ThemeProvider>
    </>
  )
}

export default App

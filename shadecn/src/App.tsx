import { ThemeProvider } from "@/components/ui/theme-provider"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { MyForm } from "@/components/MyForm/MyForm"
import { useState } from "react";
import FormButton from "./components/FormButton/FormButton";
import './App.css'
import FilterableDriversGallery from "./components/FilerableDriversGallery/FilterableDriversGallery";
import { SelectForm }  from "./components/FilterSelect/FilterSelect"

const DRIVERS = [
  { id:"1", name: "Taras Shevchenko", email: "taras@gmail.com", phoneNumber: "0723456789", pricePerKg: "110kr", available: true },
  { id:"1", name: "Solomiya Kvitka", email: "natalia@gmail.com", phoneNumber: "0725256769", pricePerKg: "110kr", available: true },
  { id:"1", name: "Yuliya Sham", email: "yuliya@gmail.com", phoneNumber: "0704277301", pricePerKg: "100kr", available: true },
  { id:"1", name: "Lina Kostenko", email: "natalia@gmail.com", phoneNumber: "0725454389", pricePerKg: "110kr", available: true },
  { id:"1", name: "Andriy Shevchenko", email: "natalia@gmail.com", phoneNumber: "0725456789", pricePerKg: "110kr", available: true },
  { id:"1", name: "Olga Kobylyanska", email: "olga@gmail.com", phoneNumber: "0734567890", pricePerKg: "120kr", available: true },
  { id:"1", name: "Viktor Kovalenko", email: "viktor@gmail.com", phoneNumber: "0765432109", pricePerKg: "90kr", available: false },
];

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDriverClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

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
        <FilterableDriversGallery drivers = {DRIVERS} />
      </section>
    </ThemeProvider>
    </>
  )
}

export default App

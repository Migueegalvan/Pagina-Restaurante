"use client"


import React, { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { es } from 'date-fns/locale';
import Link from "next/link";

import { Label } from "./label.jsx";
import { Input } from "./input"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const ReservationForm = () => {
  const [date, setDate] = useState();
  return (
    <form className='flex flex-col gap-y-10'>
      <div className='grid gap-[30px]'>
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'>
          <div>
            <Label htmlFor='firtsname'>Nombre</Label>
            <Input id='firtsname' type='firtsname' />
          </div>
          <div>
            <Label htmlFor='lastname'>Apellido</Label>
            <Input id='lastname' type='lastname' />
          </div>
        </div>

        <div className='grid grid-cols-1 xl:grid-cols-2 gap-[30px]'></div>
        {/*Calendario*/}
        <div>

          <label>Fecha</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn(
                  "w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP",{ locale: es }) : <span>Seleccione una fecha</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/*Selects*/}
        <div>
          <label>Personas</label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Cuantas personas?" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Personas</SelectLabel>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

      </div>

      <Button className='uppercase w.full xl:w-auto xl:self-end'>
        Reservar
      </Button>
    </form>
  );

};

export default ReservationForm
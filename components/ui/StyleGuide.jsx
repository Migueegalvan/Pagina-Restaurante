"use client"

import * as React from "react"
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



const StyleGuide = () => {
  const [date, setDate] = React.useState();
  return (<>
    {/* Tipografia */}
    <div className='flex flex-col gap-y-4 p-24'>
      <h1>Heading1 </h1>
      <h2>Heading2</h2>
      <h3>Heading3</h3>
      <p>Lorem ipsum dolor
        sit amet consectetur adipisicing elit.
        Assumenda id voluptatibus voluptate fuga
        nulla? Deleniti, a aliquam sint vel
        accusantium provident officiis ab quam qu
        i distinctio aut voluptate molestiae ipsam.
      </p>
    </div>
    <div className='bg-black p-24 flex flex flex-col gap-y-4'>
      <Link href='/'>Link</Link>

      {/* Botones */}
      <Button variant='default'>boton11</Button>
      <Button variant='orange'>boton2</Button>
      <Button variant='input'>boton3</Button>
      <Button variant='orange' size='sm'>boton2</Button>

      {/*Labels y inputs */}
      <div>
        <Label htmlFor='firtsname'> Nombre</Label>
        <Input type='firtsname' id='firtsname' />
      </div>

      <div>
        <Label htmlFor='lastname'>Apellido</Label>
        <Input type='lastname' id='lastname' />

        {/*Calendario*/}

        <div>
          <Label>Fecha</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn(
                  "w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
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
      </div>

      {/*Selects*/}

      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  </>
  );
};

export default StyleGuide;
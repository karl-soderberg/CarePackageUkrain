"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import "./MyForm.css"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { toast } from "../ui/use-toast"
import { useMutation } from "react-query"
import { PostDriver } from "@/utils/APIcalls"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  pricePerKg: z.string().min(2, {
    message: "Phone Number must be at least 2 characters.",
  }),
  city: z.string().min(2, {
    message: "city must be at least 2 characters.",
  }),
  available: z.boolean().default(true),
})

export function MyForm( { isOpen, onClose, selectedCity}) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  const mutation = useMutation(PostDriver)

  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    try {
      const formData = { ...data, city: selectedCity }; 
      await mutation.mutateAsync(formData);
      toast({
        title: 'Driver added successfully',
      });
      onClose();
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message || 'An error occurred',
      });
    }
  }

  if (!isOpen) return null;

  return (
    <section className="modal">
      <article className="modal-content">
        <header className="formheader">
          <h2>Add New Driver</h2>
          <span className="close" onClick={onClose}>&times;</span> 
        </header>
        <Form {...form}>
          <form  onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Write your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your_email@gmail.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="+46" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pricePerKg"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Price per kg, SEK or UAH" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select City" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Stockholm">Stockholm</SelectItem>
                  <SelectItem value="Uppsala">Uppsala</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
              )}
            />
            <FormField
                  control={form.control}
                  name="available"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div className="space-y-0.5">
                        <FormLabel>Available</FormLabel>
                      </div>
                      <FormControl>
                        <select
                          value={field.value ? "true" : "false"}
                          onChange={(e) => field.onChange(e.target.value === "true")}
                        >
                          <option value="true">Yes</option>
                          <option value="false">No</option>
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />

            <section className="formbuttons">
              <Button className="close-button" onClick={onClose}>Close</Button> 
              <Button type="submit" id="submit-button">Submit</Button>
            </section>
          </form>
        </Form>
      </article>
    </section>
  )
}

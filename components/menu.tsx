"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { menuData } from "@/data/menu-data"

export function Menu() {
  return (
    <section id="menu" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-4">Our Menu</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our wide variety of delicious dishes, from breakfast favorites to mouthwatering main courses, pizzas,
          and refreshing beverages.
        </p>

        <Tabs defaultValue="all" className="w-full">
          <div className="mb-8 overflow-x-auto">
            <TabsList className="inline-flex min-w-max">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              <TabsTrigger value="noodles">Noodles</TabsTrigger>
              <TabsTrigger value="chinese">Chinese</TabsTrigger>
              <TabsTrigger value="rice">Rice Bowl</TabsTrigger>
              <TabsTrigger value="main">Main Course</TabsTrigger>
              <TabsTrigger value="paneer">Paneer Special</TabsTrigger>
              <TabsTrigger value="pizza">Pizza</TabsTrigger>
              <TabsTrigger value="pasta">Pasta</TabsTrigger>
              <TabsTrigger value="sandwich">Sandwich</TabsTrigger>
              <TabsTrigger value="burger">Burger</TabsTrigger>
              <TabsTrigger value="beverages">Beverages</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-8">
            {Object.entries(menuData).map(([category, items]) => (
              <MenuCategory key={category} category={category} items={items} />
            ))}
          </TabsContent>

          {Object.entries(menuData).map(([category, items]) => (
            <TabsContent key={category} value={category.toLowerCase()} className="space-y-8">
              <MenuCategory category={category} items={items} />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">* Veg. & Non-Veg. Thali Available</p>
          <p className="text-gray-600 italic">* All prices are inclusive of taxes</p>
          <p className="text-gray-600 italic">* Didn't Get Bill For Your Food? Have It For Free</p>
        </div>
      </div>
    </section>
  )
}

function MenuCategory({ category, items }) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-red-600 mb-6 pb-2 border-b border-red-200">{category}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

function MenuItem({ item }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image || `/placeholder.svg?height=300&width=400&text=${encodeURIComponent(item.name)}`}
          alt={item.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {item.isVeg !== undefined && (
          <div className="absolute top-2 right-2">
            <Badge className={item.isVeg ? "bg-green-600" : "bg-red-600"}>{item.isVeg ? "Veg" : "Non-Veg"}</Badge>
          </div>
        )}
      </div>
      <CardHeader className="pb-2 pt-4">
        <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
      </CardHeader>
      <CardContent className="pb-2">
        {item.description && <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>}
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <p className="text-red-600 font-bold">₹{item.price}</p>
        {item.isSpicy && (
          <Badge variant="outline" className="border-orange-500 text-orange-500">
            Spicy
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}

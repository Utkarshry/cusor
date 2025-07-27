"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Clock, MapPin, Filter } from "lucide-react"

const opportunities = [
  {
    id: 1,
    title: "AI Ethics in Healthcare",
    type: "Research Project",
    field: "AI/ML",
    description: "Investigating ethical implications of AI decision-making in medical diagnosis",
    participants: 4,
    duration: "3 months",
    location: "Hybrid",
    skills: ["Python", "Ethics", "Healthcare"],
    level: "Intermediate",
  },
  {
    id: 2,
    title: "CRISPR Gene Editing Workshop",
    type: "Skill Exchange",
    field: "Life Sciences",
    description: "Learn the fundamentals of CRISPR technology and its applications",
    participants: 12,
    duration: "2 weeks",
    location: "In-person",
    skills: ["Molecular Biology", "Lab Techniques"],
    level: "Beginner",
  },
  {
    id: 3,
    title: "Quantum Computing Algorithms",
    type: "Research Project",
    field: "Physics",
    description: "Developing new algorithms for quantum error correction",
    participants: 3,
    duration: "6 months",
    location: "Remote",
    skills: ["Quantum Physics", "Mathematics", "Programming"],
    level: "Advanced",
  },
  {
    id: 4,
    title: "Data Visualization Masterclass",
    type: "Skill Exchange",
    field: "Data Science",
    description: "Master the art of creating compelling data visualizations",
    participants: 8,
    duration: "1 month",
    location: "Hybrid",
    skills: ["D3.js", "Python", "Design"],
    level: "Intermediate",
  },
  {
    id: 5,
    title: "Climate Change Modeling",
    type: "Research Project",
    field: "Environmental Science",
    description: "Building predictive models for climate change impacts",
    participants: 6,
    duration: "4 months",
    location: "In-person",
    skills: ["R", "Statistics", "Climate Science"],
    level: "Intermediate",
  },
  {
    id: 6,
    title: "Machine Learning Fundamentals",
    type: "Skill Exchange",
    field: "AI/ML",
    description: "Comprehensive introduction to machine learning concepts and applications",
    participants: 15,
    duration: "6 weeks",
    location: "Online",
    skills: ["Python", "Statistics", "TensorFlow"],
    level: "Beginner",
  },
]

const categories = ["All", "Research Project", "Skill Exchange"]
const fields = ["All", "AI/ML", "Life Sciences", "Physics", "Data Science", "Environmental Science"]

export function OpportunitiesSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedField, setSelectedField] = useState("All")

  const filteredOpportunities = opportunities.filter((opportunity) => {
    const categoryMatch = selectedCategory === "All" || opportunity.type === selectedCategory
    const fieldMatch = selectedField === "All" || opportunity.field === selectedField
    return categoryMatch && fieldMatch
  })

  return (
    <section id="opportunities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Opportunities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover research projects and skill-sharing sessions that match your interests and experience level.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Category:</span>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Field:</span>
            {fields.map((field) => (
              <Button
                key={field}
                variant={selectedField === field ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedField(field)}
                className={selectedField === field ? "bg-teal-600 hover:bg-teal-700" : ""}
              >
                {field}
              </Button>
            ))}
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={opportunity.type === "Research Project" ? "default" : "secondary"}>
                    {opportunity.type}
                  </Badge>
                  <Badge variant="outline">{opportunity.field}</Badge>
                </div>
                <CardTitle className="text-xl">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {opportunity.participants} participants
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Badge
                    variant={
                      opportunity.level === "Beginner"
                        ? "secondary"
                        : opportunity.level === "Intermediate"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {opportunity.level}
                  </Badge>
                  <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No opportunities match your current filters.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSelectedCategory("All")
                setSelectedField("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

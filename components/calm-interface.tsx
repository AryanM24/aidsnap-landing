"use client"

import { useState, useEffect } from "react"
import { MapPin, RefreshCw, Phone, AlertTriangle, Loader2 } from "lucide-react"

const emergencyContacts = [
  {
    id: 1,
    title: "Emergency Services",
    number: "911",
    description: "Police, Fire, Medical",
    icon: AlertTriangle,
    buttonColor: "bg-red-500 hover:bg-red-600",
    iconBg: "bg-red-500/20",
  },
  {
    id: 2,
    title: "Poison Control",
    number: "1-800-222-1222",
    description: "24/7 Poison Emergency Hotline",
    icon: Phone,
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    iconBg: "bg-blue-500/20",
  },
  {
    id: 3,
    title: "Suicide & Crisis Lifeline",
    number: "988",
    description: "24/7 Mental Health Crisis Support",
    icon: Phone,
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    iconBg: "bg-blue-500/20",
  },
  {
    id: 4,
    title: "Domestic Violence Hotline",
    number: "1-800-799-7233",
    description: "24/7 Confidential Support",
    icon: Phone,
    buttonColor: "bg-blue-500 hover:bg-blue-600",
    iconBg: "bg-blue-500/20",
  },
]

export function CalmInterface() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [isSearchingLocation, setIsSearchingLocation] = useState(true)
  const [searchingText, setSearchingText] = useState("Searching for location")

  useEffect(() => {
    if (isSearchingLocation) {
      const searchingStates = [
        "Searching for location",
        "Searching for location.",
        "Searching for location..",
        "Searching for location...",
      ]
      let index = 0

      const interval = setInterval(() => {
        setSearchingText(searchingStates[index])
        index = (index + 1) % searchingStates.length
      }, 500)

      const timeout = setTimeout(() => {
        setIsSearchingLocation(false)
      }, 3000)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [isSearchingLocation])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setIsSearchingLocation(true)
    setTimeout(() => setIsRefreshing(false), 1000)
  }

  return (
    <div className="w-full h-full bg-[#1a1a1a] rounded-2xl text-white relative overflow-hidden">
      {isSearchingLocation ? (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Loader2 className="w-8 h-8 text-red-500 animate-spin" />
          <p className="text-gray-300 text-sm">{searchingText}</p>
        </div>
      ) : (
        <div className="p-4 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Albany, NY, United States</span>
            </div>
            <button onClick={handleRefresh} className="p-1 hover:bg-gray-700 rounded">
              <RefreshCw className={`w-4 h-4 text-red-500 ${isRefreshing ? "animate-spin" : ""}`} />
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Emergency Services</h3>

            <div className="space-y-3">
              {emergencyContacts.map((contact) => {
                const IconComponent = contact.icon
                return (
                  <div key={contact.id} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${contact.iconBg}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{contact.title}</h4>
                        <p className="text-red-400 font-semibold">{contact.number}</p>
                        <p className="text-gray-400 text-sm">{contact.description}</p>
                      </div>
                    </div>
                    <button className={`p-3 rounded-full ${contact.buttonColor} transition-colors`}>
                      <Phone className="w-5 h-5 text-white" />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs px-2">
            <p>Only call emergency services in case of genuine emergencies.</p>
            <p>Misuse of emergency services is a criminal offense in many jurisdictions.</p>
          </div>
        </div>
      )}
    </div>
  )
}

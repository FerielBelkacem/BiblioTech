import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  Book,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Filter,
  BookOpen,
  Calendar,
  TrendingUp,
  Award,
  Menu,
  X,
} from "lucide-react";

const LibraryManagement = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Données simulées
  const books = [
    {
      id: 1,
      title: "Le Petit Prince",
      author: "Antoine de Saint-Exupéry",
      status: "Disponible",
      category: "Fiction",
      cover:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=300&fit=crop",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      status: "Emprunté",
      category: "Science-Fiction",
      cover:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=200&h=300&fit=crop",
    },
    {
      id: 3,
      title: "L'Étranger",
      author: "Albert Camus",
      status: "Disponible",
      category: "Philosophie",
      cover:
        "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=200&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Harry Potter",
      author: "J.K. Rowling",
      status: "Disponible",
      category: "Fantasy",
      cover:
        "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?w=200&h=300&fit=crop",
    },
  ];

  const members = [
    {
      id: 1,
      name: "Feriel Belkacem",
      email: "feriel.m@email.com",
      books: 3,
      status: "Actif",
    },
    {
      id: 2,
      name: "Aya KhedimAllah",
      email: "aya.k@email.com",
      books: 1,
      status: "Actif",
    },
    {
      id: 3,
      name: "Lyna Nemir",
      email: "nemir.l@email.com",
      books: 2,
      status: "Inactif",
    },
    {
      id: 4,
      name: "Hafida Affrah Hebbadj",
      email: "hafida.a@email.com",
      books: 2,
      status: "Inactif",
    },
    {
      id: 5,
      name: "Cerine Amira Sami",
      email: "sami.c@email.com",
      books: 2,
      status: "Inactif",
    },
    {
      id: 6,
      name: "Cilina Louahchi",
      email: "cilina.l@email.com",
      books: 2,
      status: "Inactif",
    },
  ];

  const stats = [
    {
      icon: Book,
      label: "Total Livres",
      value: "2,458",
      change: "+12%",
      color: "bg-blue-500",
    },
    {
      icon: Users,
      label: "Membres",
      value: "1,234",
      change: "+8%",
      color: "bg-purple-500",
    },
    {
      icon: BookOpen,
      label: "Emprunts Actifs",
      value: "342",
      change: "+23%",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      label: "Taux d'Emprunt",
      value: "87%",
      change: "+5%",
      color: "bg-orange-500",
    },
  ];

  // Sidebar
  const Sidebar = () => (
    <>
      {/* Overlay pour mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-white h-screen fixed left-0 top-0 shadow-2xl z-40 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 lg:p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Book className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div>
                <h1 className="text-lg lg:text-xl ">LibraTech</h1>
                <p className="text-xs text-slate-400">Gestion intelligente</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1 lg:space-y-2">
          {[
            { id: "dashboard", icon: BarChart3, label: "Tableau de bord" },
            { id: "books", icon: Book, label: "Livres" },
            { id: "members", icon: Users, label: "Membres" },
            { id: "settings", icon: Settings, label: "Paramètres" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              className={`w-full flex items-center space-x-3 px-4 py-2 lg:py-3 rounded-lg transition-all duration-200 ${
                currentPage === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                  : "hover:bg-slate-700/50"
              }`}
            >
              <item.icon className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="font-medium text-sm lg:text-base">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <button className="w-full flex items-center space-x-3 px-4 py-2 lg:py-3 rounded-lg hover:bg-slate-700/50 transition-all">
            <LogOut className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">Déconnexion</span>
          </button>
        </div>
      </div>
    </>
  );

  // Header
  const Header = () => (
    <div className="bg-white border-b border-slate-200 px-4 lg:px-8 py-3 lg:py-4 lg:ml-64 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-all"
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>

          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 lg:left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4 lg:w-5 lg:h-5" />
              <input
                type="text"
                placeholder="Rechercher un livre, membre ou catégorie..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 lg:pl-12 pr-4 py-2 lg:py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm lg:text-base"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2 lg:space-x-4 ml-2 lg:ml-8">
          <button className="relative p-2 hover:bg-slate-100 rounded-lg transition-all">
            <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center space-x-2 lg:space-x-3 pl-2 lg:pl-4 border-l border-slate-200">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-semibold text-slate-800">Admin</p>
              <p className="text-xs text-slate-500">Administrateur</p>
            </div>
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Page
  // Dashboard Page - Version améliorée pour responsive
  const DashboardPage = () => (
    <div className="space-y-4 lg:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1 lg:mb-2">
          Tableau de bord
        </h2>
        <p className="text-sm lg:text-base text-slate-600">
          Vue d'ensemble de votre bibliothèque
        </p>
      </div>

      {/* Grille de statistiques responsive améliorée */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:scale-[1.02] hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div
                className={`${stat.color} p-2 sm:p-3 rounded-lg lg:rounded-xl shadow-md`}
              >
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-green-600 text-xs sm:text-sm font-semibold bg-green-50 px-2 sm:px-3 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-1">
              {stat.value}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm lg:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Section à deux colonnes responsive améliorée */}
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Livres populaires - carte améliorée */}
        <div className="flex-1 bg-white rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
                Livres Populaires
              </h3>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir tout →
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {books.slice(0, 3).map((book) => (
              <div
                key={book.id}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-slate-50 rounded-lg lg:rounded-xl transition-all duration-200 border border-transparent hover:border-slate-200"
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-12 h-16 sm:w-14 sm:h-20 lg:w-16 lg:h-20 object-cover rounded-lg shadow"
                  />
                  <div
                    className={`absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center ${
                      book.status === "Disponible"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                  >
                    <span className="text-white text-[10px] sm:text-xs">●</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-slate-800 text-sm sm:text-base lg:text-lg mb-1 truncate">
                    {book.title}
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm truncate">
                    {book.author}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="inline-block px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                      {book.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        book.status === "Disponible"
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {book.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activités récentes - carte améliorée */}
        <div className="flex-1 bg-white rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-slate-100">
          <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800">
                Activités Récentes
              </h3>
            </div>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir l'historique →
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                id: 1,
                action: "Nouveau livre ajouté",
                book: "Le Petit Prince",
                time: "Il y a 2h",
                color: "bg-green-500",
                icon: "➕",
              },
              {
                id: 2,
                action: "Emprunt effectué",
                book: "1984",
                time: "Il y a 4h",
                color: "bg-blue-500",
                icon: "📖",
              },
              {
                id: 3,
                action: "Retour de livre",
                book: "L'Étranger",
                time: "Il y a 1j",
                color: "bg-purple-500",
                icon: "↩️",
              },
            ].map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 hover:bg-slate-50 rounded-lg lg:rounded-xl transition-all duration-200"
              >
                <div
                  className={`${activity.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 shadow`}
                >
                  <span className="text-white text-sm sm:text-base">
                    {activity.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">
                      {activity.action}
                    </h4>
                    <span className="text-slate-400 text-xs">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mt-1">{activity.book}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="text-xs text-slate-500">
                      Action complétée
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section supplémentaire pour grands écrans */}
      <div className="hidden xl:block mt-6">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Performances de la semaine
              </h3>
              <p className="text-slate-600">
                Taux d'emprunt en hausse de 15% cette semaine
              </p>
            </div>
            <TrendingUp className="w-12 h-12 text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );

  // Books Page
  const BooksPage = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 lg:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2">
            Gestion des Livres
          </h2>
          <p className="text-sm lg:text-base text-slate-600">
            Gérez votre collection de livres
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="font-semibold text-sm lg:text-base">
            Ajouter un livre
          </span>
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 lg:gap-4">
        <button className="px-3 lg:px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all flex items-center justify-center space-x-2">
          <Filter className="w-3 h-3 lg:w-4 lg:h-4" />
          <span className="text-sm lg:text-base">Filtrer</span>
        </button>
        <select className="px-3 lg:px-4 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base">
          <option>Toutes les catégories</option>
          <option>Fiction</option>
          <option>Science-Fiction</option>
          <option>Philosophie</option>
        </select>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4 xl:gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-2 lg:top-3 right-2 lg:right-3">
                <span
                  className={`px-2 lg:px-3 py-1 rounded-full text-xs font-semibold ${
                    book.status === "Disponible"
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {book.status}
                </span>
              </div>
            </div>
            <div className="p-3 lg:p-4">
              <h3 className="font-bold text-slate-800 text-sm lg:text-base mb-1 line-clamp-1">
                {book.title}
              </h3>
              <p className="text-xs lg:text-sm text-slate-600 mb-2 line-clamp-1">
                {book.author}
              </p>
              <span className="inline-block px-2 lg:px-3 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                {book.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Members Page
  const MembersPage = () => (
    <div className="space-y-4 lg:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 lg:gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2">
            Gestion des Membres
          </h2>
          <p className="text-sm lg:text-base text-slate-600">
            Gérez les membres de votre bibliothèque
          </p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-xl hover:shadow-lg transition-all flex items-center justify-center space-x-2 w-full sm:w-auto">
          <Plus className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="font-semibold text-sm lg:text-base">
            Ajouter un membre
          </span>
        </button>
      </div>

      <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-slate-700">
                Nom
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-slate-700">
                Email
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-slate-700">
                Livres Empruntés
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-slate-700">
                Statut
              </th>
              <th className="px-4 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-semibold text-slate-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {members.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50 transition-all">
                <td className="px-4 lg:px-6 py-3 lg:py-4">
                  <div className="flex items-center space-x-2 lg:space-x-3">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm lg:text-base">
                      {member.name.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-800 text-sm lg:text-base truncate max-w-[100px] lg:max-w-none">
                      {member.name}
                    </span>
                  </div>
                </td>
                <td className="px-4 lg:px-6 py-3 lg:py-4 text-slate-600 text-sm lg:text-base truncate max-w-[150px] lg:max-w-none">
                  {member.email}
                </td>
                <td className="px-4 lg:px-6 py-3 lg:py-4">
                  <span className="bg-blue-100 text-blue-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-semibold">
                    {member.books} livre(s)
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-3 lg:py-4">
                  <span
                    className={`px-2 lg:px-3 py-1 rounded-full text-xs font-semibold ${
                      member.status === "Actif"
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-4 lg:px-6 py-3 lg:py-4">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-xs lg:text-sm">
                    Voir détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Settings Page
  const SettingsPage = () => (
    <div className="space-y-4 lg:space-y-6 ">
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2">
          Paramètres
        </h2>
        <p className="text-sm lg:text-base text-slate-600">
          Configurez votre système de bibliothèque
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 p-4 lg:p-6">
            <div className="text-center mb-4 lg:mb-6">
              <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
                <User className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-slate-800">
                Admin
              </h3>
              <p className="text-slate-600 text-xs lg:text-sm">
                admin@bibliotech.com
              </p>
            </div>
            <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition-all font-medium text-sm lg:text-base">
              Modifier le profil
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4 lg:space-y-6">
          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 p-4 lg:p-6">
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 lg:mb-4">
              Paramètres généraux
            </h3>
            <div className="space-y-3 lg:space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 lg:mb-2">
                  Nom de la bibliothèque
                </label>
                <input
                  type="text"
                  defaultValue="BiblioTech"
                  className="w-full px-3 lg:px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 lg:mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  defaultValue="contact@bibliotech.com"
                  className="w-full px-3 lg:px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 lg:mb-2">
                  Durée d'emprunt (jours)
                </label>
                <input
                  type="number"
                  defaultValue="14"
                  className="w-full px-3 lg:px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm lg:text-base"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg border border-slate-100 p-4 lg:p-6">
            <h3 className="text-lg lg:text-xl font-bold text-slate-800 mb-3 lg:mb-4">
              Notifications
            </h3>
            <div className="space-y-2 lg:space-y-3">
              {[
                { label: "Nouveaux emprunts", checked: true },
                { label: "Retours en retard", checked: true },
                { label: "Nouveaux membres", checked: false },
                { label: "Inventaire faible", checked: true },
              ].map((notif, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2 lg:p-3 hover:bg-slate-50 rounded-lg transition-all"
                >
                  <span className="text-slate-700 text-sm lg:text-base">
                    {notif.label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={notif.checked}
                      className="sr-only peer"
                    />
                    <div className="w-10 h-5 lg:w-11 lg:h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 lg:after:h-5 lg:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:shadow-lg transition-all font-semibold text-sm lg:text-base">
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-slate-50 min-h-screen w-full">
      <Sidebar />
      <Header />
      <main className="pt-4 lg:pt-0 lg:ml-64 p-4 lg:p-6 xl:p-8">
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "books" && <BooksPage />}
        {currentPage === "members" && <MembersPage />}
        {currentPage === "settings" && <SettingsPage />}
      </main>
    </div>
  );
};

export default LibraryManagement;

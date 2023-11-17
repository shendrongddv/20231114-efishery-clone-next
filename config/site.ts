import { GraduationCap, LayoutGrid, ListTodo } from "lucide-react";

// NavHeader
export const NavHeader = [
  {
    id: 1,
    label: "Solusi",
    desc: "",
    url: "/",
    icon: LayoutGrid,
    sublink: true,
    links: [
      {
        id: 1,
        label: "eFish",
        desc: "Solusi untuk Pembudidayaan Ikan",
        url: "/",
        icon: ListTodo,
      },
      {
        id: 2,
        label: "eShrimp",
        desc: "Solusi untuk Pembudidayaan Udang",
        url: "/",
        icon: GraduationCap,
      },
      {
        id: 3,
        label: "eFishery Fish & Shrimp",
        desc: "Solusi untuk para pelaku bisnis & pedagang",
        url: "/",
        icon: LayoutGrid,
      },
      {
        id: 4,
        label: "Lihat semua Program",
        desc: "",
        url: "/",
        icon: LayoutGrid,
      },
    ],
  },
  {
    id: 2,
    label: "Karir",
    desc: "",
    url: "/",
    icon: LayoutGrid,
    sublink: true,
    links: [
      {
        id: 1,
        label: "Lowongan Pekerjaan",
        desc: "Bergabung bersama eFishery",
        url: "/",
        icon: ListTodo,
      },
      {
        id: 2,
        label: "eFishery Academy",
        desc: "Tumbuh bersama eFishery",
        url: "/",
        icon: GraduationCap,
      },
      {
        id: 3,
        label: "Lihat semua Program",
        desc: "",
        url: "/",
        icon: LayoutGrid,
      },
    ],
  },
  {
    id: 3,
    label: "Perusahaan",
    desc: "",
    url: "/",
    icon: LayoutGrid,
    sublink: false,
    links: [
      {
        id: 1,
        label: "LABELXXX",
        desc: "DESCXXX",
        url: "/",
        icon: LayoutGrid,
      },
    ],
  },
  {
    id: 4,
    label: "Resource",
    desc: "",
    url: "/",
    icon: LayoutGrid,
    sublink: false,
    links: [
      {
        id: 1,
        label: "LABELXXX",
        desc: "DESCXXX",
        url: "/",
        icon: LayoutGrid,
      },
    ],
  },
  {
    id: 5,
    label: "Bantuan",
    desc: "",
    url: "/",
    icon: LayoutGrid,
    sublink: false,
    links: [
      {
        id: 1,
        label: "LABELXXX",
        desc: "DESCXXX",
        url: "/",
        icon: LayoutGrid,
      },
    ],
  },
];

// NavFooter
export const NavFooter = [
  {
    id: 1,
    group: "Perusahaan",
    links: [
      {
        id: 1,
        label: "Tentang Kami",
        url: "/",
      },
      {
        id: 2,
        label: "Resource",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    group: "Solusi",
    links: [
      {
        id: 1,
        label: "eFish",
        url: "/",
      },
      {
        id: 2,
        label: "eShrimp",
        url: "/",
      },
      {
        id: 3,
        label: "eFishery Fish & Shrimp",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    group: "Gabung",
    links: [
      {
        id: 1,
        label: "Karir",
        url: "/",
      },
      {
        id: 2,
        label: "Farmers",
        url: "/",
      },
    ],
  },
  {
    id: 4,
    group: "Hubungi Kami",
    links: [
      {
        id: 1,
        label: "Kontak",
        url: "/",
      },
    ],
  },
];

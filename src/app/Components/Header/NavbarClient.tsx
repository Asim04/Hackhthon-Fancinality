'use client';

import React from "react";
import { useCart } from "@/context/CartContext";
import Navbar from "./Navbar_singup";

export default function NavbarClient() {
    const cart = useCart();
    const totalItems = cart?.getTotalItems?.() ?? 0;

    return <Navbar totalItems={totalItems} />;
}

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Suas ideias, Documentos, & Planos. Unificados. Bem vindo ao <span className="underline">Jot Flow</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jot Flow é espaço de trabalho conectado onde <br /> o trabalho melhor e mais rápido acontece.
            </h3>
            <Button>
                Entre pro Jot Flow
                <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
        </div>
    )
}
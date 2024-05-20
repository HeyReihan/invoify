"use client";

import { useTranslationContext } from "@/contexts/TranslationContext";

const BaseFooter = () => {
    const { _t } = useTranslationContext();

    return (
        <footer className="container py-10">
            <p>
                {_t("footer.developedBy")}{" "}
                <a
                    href="https://github.com/HeyReihan"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                >
                    Reihan Musyaffa
                </a>
            </p>
        </footer>
    );
};

export default BaseFooter;

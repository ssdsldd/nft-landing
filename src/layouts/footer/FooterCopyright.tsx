import React from "react";
import { S } from "./Footer-Styles";

export const FooterCopyright: React.FC = () => {
    return(
        <S.Copyright justify="space-between">
            © Copyright 2023 - Creativeart
            <S.Privacy gap="28px">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </S.Privacy>
        </S.Copyright>
    )
}

import { Photo } from "./Photo";

export interface Member {
    id: number;
    UserName:     string;
    Gender:       string;
    photoUrl: string;
    age: number;
    KnownAs:      string;
    Created:      Date;
    LastActive:   Date;
    Introduction: string;
    LookingFor:   string;
    Interests:    string;
    City:         string;
    Country:      string;
    Photos:       Photo[];
}

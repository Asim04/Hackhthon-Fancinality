import { client } from "./client";
import { Image } from "sanity";

export interface TMenuItem {
    _id: string;
    name: string;
    tags: string[];
    category: string;
    imageUrl: string;
    price: number
  };

export interface TChef {
    
        _id: string;
        _type: "chef";
        _rev?: string;
        _createdAt?: string;
        _updatedAt?: string;
        name: string;
        position?: string;
        experience?: number;
        specialty?: string;
        
        imageUrl: string;
        description: string;
        available?: boolean;
        tags?: string[];
      
      
  };





export const getAllPost = async (category?: string) => {
    try {
        // Optimized query with projection and optional filtering
        const queryAllPosts = category 
            ? `*[_type == "food" && category match "${category}"]{
                _id, 
                name, 
                "imageUrl": image.asset->url, 
                price, 
                category, 
                tags
            }[0...50]` 
            : `*[_type == "food"]{
                _id, 
                name, 
                "imageUrl": image.asset->url, 
                price, 
                category, 
                tags
            }[0...50]`; 

        const data = await client.fetch(queryAllPosts, {}, { 
            cache: 'force-cache', // Enable caching
            next: { 
                revalidate: 3600 // Revalidate every hour
            }
        });

        return data;

    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export const chefData = async (): Promise<TChef[]> => {
    try {
        const query = `*[_type == "chef"]{
            _id, 
            name, 
            "imageUrl": image.asset->url, 
            position, 
            experience, 
            specialty, 
            available, 
            description, 
            tags
        }[0...50]`; 
        const chefData = await client.fetch<TChef[]>(query, {}, { 
            cache: 'force-cache', // Enable caching
            next: { 
                revalidate: 3600 // Revalidate every hour
            }
        });
        return chefData || [];
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}
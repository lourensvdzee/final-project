/* db/models/ApiProduct.tsx */

/* import fetch from "node-fetch";

export interface ApiProduct {
  title: string;
  ean: string;
  images: string[];
  lowest_recorded_price: number;
}

interface ApiItem {
  title: string;
  ean: string;
  images: string[];
  offers: {
    price: number;
  }[];
}

interface ApiResponse {
  items: ApiItem[];
}

// Fetch API products based on search query
export const fetchApiProducts = async (
  searchQuery: string
): Promise<ApiProduct[]> => {
  const apiUrl = "https://api.upcitemdb.com/prod/trial/search";
  const matchMode = 1;
  const type = "product";

  try {
    const response = await fetch(
      `${apiUrl}?s=${searchQuery}&match_mode=${matchMode}&type=${type}`
    );
    const data = (await response.json()) as ApiResponse;

    if (data && data.items && data.items.length > 0) {
      const apiProducts = data.items.map((item) => ({
        title: item.title,
        ean: item.ean,
        images: item.images,
        lowest_recorded_price: item.offers[0]?.price || 0,
      }));

      return apiProducts;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching API products:", error);
    throw error;
  }
}; */

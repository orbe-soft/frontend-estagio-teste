import { z } from "zod"
// Esquema para informações de imagens
const ImagesSchema = z.object({
    id: z.string(),      // ID da imagem (string)
    url: z.string(),     // URL da imagem (string)
    order_id: z.string(),// ID da ordem associada à imagem (string)
  });
  
  // Esquema para dados de um produto
  const ProductDataSchema = z.object({
    id: z.string(),      // ID do produto (string)
    name: z.string(),    // Nome do produto (string)
    brand: z.string(),   // Marca do produto (string)
    images: z.array(ImagesSchema), // Array de objetos seguindo o esquema ImagesSchema
    description: z.string(), // Descrição do produto (string)
    price: z.number(),   // Preço do produto (número)
  });
  
  // Esquema para a estrutura geral dos dados
  const DataPropsSchema = z.object({
    content: z.array(ProductDataSchema), // Array de objetos seguindo o esquema ProductDataSchema
    pagination: z.object({
      currentPage: z.number(), // Página atual (número)
      lastPage: z.number(),   // Última página (número)
      total: z.number(),      // Total de itens (número)
      limit: z.number(),      // Limite de itens por página (número)
    }),
  });
  
  export { DataPropsSchema };
  
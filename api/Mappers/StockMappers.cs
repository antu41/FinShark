using api.Dtos.Stock;
using api.Models;
using api.Dtos.Comment;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stock)
        {
            return new StockDto
            {
                Id = stock.Id,
                Symbol = stock.Symbol,
                CompanyName = stock.CompanyName,
                Purchase = stock.Purchase,
                LastDiv = stock.LastDiv,
                Industry = stock.Industry,
                Comments = stock.Comments == null ? new List<CommentDto>() : stock.Comments.Select(c => c.ToCommentDto()).ToList()
            };
        }

        public static Stock ToStockFromCreateDTO(this CreateStockRequestDto dto)
        {
            return new Stock
            {
                Symbol = dto.Symbol,
                CompanyName = dto.CompanyName,
                Purchase = dto.Purchase,
                LastDiv = dto.LastDiv,
                Industry = dto.Industry,
                MarketCap = dto.MarketCap
            };
        }

        public static Stock ToStockFromFMP(this FMPStock dto)
        {
            return new Stock
            {
                Symbol = dto.symbol,
                CompanyName = dto.companyName,
                Purchase = (decimal)dto.price,
                LastDiv = (decimal)dto.lastDividend,
                Industry = dto.industry,
                MarketCap = dto.marketCap
            };
        }

    }
}
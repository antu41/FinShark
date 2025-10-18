using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class PortfolioRepository : IPortfolioRepository
    {
        private readonly ApplicationDBContext _context;
        public PortfolioRepository(ApplicationDBContext context)
        {
            _context = context;

        }

        public async Task<List<Stock>> GetUserPortfolio(AppUser appUser)
        {
            var portfolioStocks = await _context.Portfolios
                .Where(p => p.AppUserId == appUser.Id)
                .Select(p => new Stock
                {
                    Id = p.StockId,
                    Symbol = p.Stock.Symbol,
                    CompanyName = p.Stock.CompanyName,
                    Purchase = p.Stock.Purchase,
                    LastDiv = p.Stock.LastDiv,
                    Industry = p.Stock.Industry,
                    MarketCap = p.Stock.MarketCap
                })
                .ToListAsync();

            return portfolioStocks;
        }

        public async Task<Portfolio> CreateAsync(Portfolio portfolio)
        {
            await _context.Portfolios.AddAsync(portfolio);
            await _context.SaveChangesAsync();
            return portfolio;
        }

        public async Task<Portfolio> DeletePortfolio(AppUser appUser, string symbol)
        {
            var portfolioEntry = await _context.Portfolios
                .Include(p => p.Stock)
                .FirstOrDefaultAsync(p => p.AppUserId == appUser.Id && p.Stock.Symbol.Equals(symbol, StringComparison.OrdinalIgnoreCase));

            if (portfolioEntry == null)
            {
                throw new Exception("Portfolio entry not found");
            }

            _context.Portfolios.Remove(portfolioEntry);
            await _context.SaveChangesAsync();
            return portfolioEntry;
        }

    }
}
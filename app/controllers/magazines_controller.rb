class MagazinesController < ApplicationController
    def index
        magazines = Magazine.find_mags(params[:category])
        render json: magazines, include: [:articles]
    end

    def show 
        magazine = Magazine.find(params[:id])
        render json: magazine, incude: [:articles]
    end

    def create
        magazine = Magazine.create(
            name: params([:name]),
            category: params([:category]),
            article_id: params([:article_id])
        )
        redirect_to 'http://localhost:3000/articles.html'
      end
end

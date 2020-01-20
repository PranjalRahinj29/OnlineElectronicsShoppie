package com.sunbeam.myapplication.Adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.koushikdutta.ion.Ion;
import com.sunbeam.myapplication.R;
import com.sunbeam.myapplication.model.Product;
import com.sunbeam.myapplication.utils.Utils;

import java.util.ArrayList;

public class ProductAdapter extends RecyclerView.Adapter<ProductAdapter.ViewHolder> {
    Context context;
    ArrayList<Product>products;
    public ProductAdapter(Context context,ArrayList<Product>products)
    {
        this.context=context;
        this.products=products;
    }

    @NonNull
    @Override
    public ProductAdapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        LayoutInflater inflater=LayoutInflater.from(this.context) ;
       LinearLayout layout= (LinearLayout) inflater.inflate(R.layout.recyclerview_item_product,null);

        return new ViewHolder(layout);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Product product =products.get(position);
         String url= Utils.createUrl(product.getThumbnail());



         Ion.with(this.context)
                 .load(url)
                 .withBitmap()
                 .intoImageView(holder.imageview);


       holder.textTitle.setText("Product  Name -  "+product.getProduct_name());
       holder.textDescription.setText("Product Description - "+product.getProduct_description());
       holder.textPrice.setText("Product Price - "+product.getProduct_price());


    }

    @Override
    public int getItemCount() {
        return products.size();
    }

    public class ViewHolder  extends RecyclerView.ViewHolder{
        ImageView imageview;
        TextView textTitle,textDescription,textPrice;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);

            imageview=itemView.findViewById(R.id.imageView);
            textTitle=itemView.findViewById(R.id.textTitle);
            textDescription=itemView.findViewById(R.id.textDescription);
            textPrice=itemView.findViewById(R.id.textPrice);
        }
    }
}

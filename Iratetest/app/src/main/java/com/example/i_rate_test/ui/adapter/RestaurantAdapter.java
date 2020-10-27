package com.example.i_rate_test.ui.adapter;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.i_rate_test.R;
import com.example.i_rate_test.ui.model.Restaurant;

import java.util.ArrayList;

public class RestaurantAdapter extends RecyclerView.Adapter<RestaurantAdapter.RestaurantHolder> {
    private ArrayList<Restaurant> listRestaurant;
    private LayoutInflater inflater;
    private RestaurantListener listener;

    public RestaurantAdapter(LayoutInflater inflater) {
        this.inflater = inflater;
    }

    public void setListRestaurant(ArrayList<Restaurant> listRestaurant) {
        this.listRestaurant = listRestaurant;
        notifyDataSetChanged();

    }

    public void setListener(RestaurantListener listener) {
        this.listener = listener;
    }
    @NonNull
    @Override
    public RestaurantHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View v = inflater.inflate(R.layout.restaurant, //id layut
                parent, //Nhóm layout
                false);
        return new RestaurantHolder(v);
    }

    @Override
    public void onBindViewHolder(@NonNull RestaurantHolder holder, final int position) {
        Restaurant restaurant = listRestaurant.get(position);
        holder.bindData(restaurant);
        if (listener != null) {
            holder.itemView.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    listener.onStoryItemClick(position);
                }
            });
        }

    }

    @Override
    public int getItemCount() {
        return listRestaurant.size();
    }

    public class RestaurantHolder extends RecyclerView.ViewHolder {
        private ImageView image;
        private TextView name;
        private TextView averageRating;

        public RestaurantHolder(@NonNull View itemView) {
            super(itemView);
            image = itemView.findViewById(R.id.restaurant_image);
            name = itemView.findViewById(R.id.restaurant_name);
            averageRating = itemView.findViewById(R.id.average_rating);
        }
        public void bindData(Restaurant item) {
            image.setImageResource(item.getImage());
            name.setText(item.getName());
            averageRating.setText(item.getAverageRating());
        }
    }
    public interface RestaurantListener {
        void onStoryItemClick(int position);
    }
}

package com.example.i_rate_test.ui.restaurant;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SearchView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import androidx.lifecycle.Observer;
import androidx.lifecycle.ViewModelProviders;
import androidx.recyclerview.widget.RecyclerView;

import com.example.i_rate_test.R;
import com.example.i_rate_test.ui.adapter.RestaurantAdapter;
import com.example.i_rate_test.ui.model.Restaurant;

import java.util.ArrayList;

public class RestaurantFragment extends Fragment implements RestaurantAdapter.RestaurantListener {
    private SearchView search;
    private RestaurantViewModel restaurantViewModel;
    private RecyclerView lvRestaurant;
    public static ArrayList<Restaurant> lstRestaurant;
    private RestaurantAdapter restaurantAdapter;

    public View onCreateView(@NonNull LayoutInflater inflater,
                             ViewGroup container, Bundle savedInstanceState) {
        restaurantViewModel =
                ViewModelProviders.of(this).get(RestaurantViewModel.class);
        View root = inflater.inflate(R.layout.fragment_home, container, false);
        search = (SearchView) root.findViewById(R.id.searchView);
        lvRestaurant = root.findViewById(R.id.lv_restaurant);
        restaurantAdapter = new RestaurantAdapter(getLayoutInflater());
        lvRestaurant.setAdapter(restaurantAdapter);
        restaurantAdapter.setListener(this);
        initData();
        restaurantViewModel.getText().observe(getViewLifecycleOwner(), new Observer<String>() {
            @Override
            public void onChanged(@Nullable String s) {

            }
        });
        return root;
    }

    private void initData() {
        lstRestaurant = new ArrayList<>();
        lstRestaurant.add(new Restaurant(R.drawable.grill,"HIkoKi","3.5"));
        lstRestaurant.add(new Restaurant(R.drawable.grill,"LALALA","3.5"));
        lstRestaurant.add(new Restaurant(R.drawable.grill,"PPPP","3.5"));
        lstRestaurant.add(new Restaurant(R.drawable.grill,"HIkoKi","3.5"));
        restaurantAdapter.setListRestaurant(lstRestaurant);

    }



    @Override
    public void onStoryItemClick(int position) {

    }
}
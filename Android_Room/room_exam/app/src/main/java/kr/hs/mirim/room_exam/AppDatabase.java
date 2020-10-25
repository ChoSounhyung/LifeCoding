package kr.hs.mirim.room_exam;

import androidx.room.Database;
import androidx.room.RoomDatabase;

@Database(entities = {Todo.class}, version = 1)
public abstract class AppDatabase extends RoomDatabase {    //db 객체
    public abstract TodoDao todoDao();
}

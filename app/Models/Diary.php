<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diary extends Model
{
    use HasFactory;
    
    //date型の表示形式変換
    protected $dates = [
        'date',
    ];
    
    protected $fillable = [
        'user_id', 'title', 'body', 'image', 'audio', 'year', 'date',
    ];
    
    // 日付順ソート
    // 未来->過去
    public function getByDate()
    {
        return $this->orderBy("year","DESC")->orderBy("date","DESC")->get();
    }
    
    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
